import { useRouter } from 'next/router';
import { useCallback } from 'react';

export function useSearch(): [(searchWord: string) => void] {
  const { push, query } = useRouter();

  const changeSearchQueryUrl = useCallback((searchWord: string) => {
    if (query.q !== searchWord) {
      push(`?q=${searchWord}`);
    }
  }, []);

  return [changeSearchQueryUrl];
}
