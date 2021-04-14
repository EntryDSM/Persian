import { createContext, useCallback, useEffect, useState } from 'react';

import { Post, posts } from '@mocks/posts';

import { ProviderProps } from './types';
import { useExistContext } from './useExistContext';
import { useRouter } from 'next/router';

type SearchResultContextValue = {
  searchResult: Post[] | null;
  findPostBySearchWord: (searchWord: string) => void;
};

export const SearchResultContext = createContext<SearchResultContextValue | null>(
  null
);

export function SearchResultProvider({ children }: ProviderProps) {
  const [searchResult, setSearchResult] = useState<Post[] | null>([]);

  const findPostBySearchWord = useCallback((searchWord: string) => {
    const searchResult = posts.filter((post) =>
      post.writerName.includes(searchWord)
    );

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
