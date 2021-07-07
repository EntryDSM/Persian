import { useRouter } from 'next/router';
import { createContext, useCallback, useEffect, useState } from 'react';

import { mutate } from 'swr';

import { Posts } from '@models/post/Posts';

import { searchPost } from '@utils/api/search/search';

import { getConfig } from '@config/config';

import { ProviderProps } from './types';
import { useExistContext } from './useExistContext';

type SearchResultContextValue = {
  searchResult: Posts | null;
  findPostBySearchWord: (searchWord: string) => void;
};

export const SearchResultContext = createContext<SearchResultContextValue | null>(
  null
);

export function SearchResultProvider({ children }: ProviderProps) {
  const [searchResult, setSearchResult] = useState<Posts | null>([]);

  const findPostBySearchWord = useCallback(async (searchWord: string) => {
    const searchResult = await searchPost(searchWord);

    mutate(getConfig().endpoint.main.search.withKeyword(searchWord));

    setSearchResult(searchResult.length > 0 ? searchResult : null);
  }, []);

  const { query } = useRouter();

  useEffect(() => {
    const searchKeyword = query.q;

    if (searchKeyword) {
      findPostBySearchWord(
        typeof searchKeyword === 'string' ? searchKeyword : searchKeyword[0]
      );
    } else {
      setSearchResult([]);
    }
  }, [query]);

  return (
    <SearchResultContext.Provider
      value={{
        searchResult,
        findPostBySearchWord,
      }}
    >
      {children}
    </SearchResultContext.Provider>
  );
}

export function useSearchResult(): SearchResultContextValue {
  return useExistContext<SearchResultContextValue>(SearchResultContext);
}
