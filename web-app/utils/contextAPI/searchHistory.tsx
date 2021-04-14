import { createContext, useCallback, useEffect, useState } from 'react';

import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
} from '@utils/function/localStorage';

import { ProviderProps } from './types';
import { useExistContext } from './useExistContext';

type SearchHistoryContextValue = {
  searchHistory: string[];
  addSearchHistory: (searchWord: string) => void;
  deleteSearchHistory: (searchWord: string) => void;
};

export const SearchHistoryContext = createContext<SearchHistoryContextValue | null>(
  null
);

export function SearchHistoryProvider({ children }: ProviderProps) {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const addSearchHistory = useCallback((searchWord: string) => {
    setSearchHistory((prev) => {
      if (prev.indexOf(searchWord) !== -1) {
        return prev;
      }

      const searchHistory = [...prev];

      searchHistory.unshift(searchWord);
      searchHistory.splice(10);

      setValueToLocalStorage('searchHistory', searchHistory);

      return searchHistory;
    });
  }, []);

  const deleteSearchHistory = useCallback((searchWord: string) => {
    setSearchHistory((prev) => {
      const searchHistory = prev.filter((value) => value !== searchWord);

      setValueToLocalStorage('searchHistory', searchHistory);

      return searchHistory;
    });
  }, []);

  useEffect(() => {
    const storedSearchHistory = getValueFromLocalStorage('searchHistory');

    if (storedSearchHistory) {
      setSearchHistory(storedSearchHistory.slice(0, 10));
    }
  }, []);

  return (
    <SearchHistoryContext.Provider
      value={{
        searchHistory,
        addSearchHistory,
        deleteSearchHistory,
      }}
    >
      {children}
    </SearchHistoryContext.Provider>
  );
}

export function useSearchHistory(): SearchHistoryContextValue {
  return useExistContext<SearchHistoryContextValue>(SearchHistoryContext);
}
