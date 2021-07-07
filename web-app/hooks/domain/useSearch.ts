import { useRouter } from 'next/router';
import { useCallback } from 'react';

export function useSearch(): [string, (searchWord: string) => void] {
  const { push, query } = useRouter();

  const changeSearchQueryUrl = useCallback(
    (searchWord: string) => {
      query.q, searchWord;
      if (query.q !== searchWord) {
        push(`?q=${searchWord}`);
      }
    },
    [query]
  );

  return [
    typeof query.q === 'object' ? query.q[0] : query.q,
    changeSearchQueryUrl,
  ];
}
