import * as S from './style';

import { MouseEvent, useCallback } from 'react';

import { useSearch } from 'hooks/domain/useSearch';

import { useSearchHistory } from '@utils/contextAPI/searchHistory';

type Props = {
  searchWord: string;
};

export function SearchHistoryItem({ searchWord }: Props) {
  const [, changeSearchQueryUrl] = useSearch();

  const { deleteSearchHistory } = useSearchHistory();

  const searchPost = () => {
    changeSearchQueryUrl(searchWord);
  };

  const onClickDeleteSearchHistory = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    deleteSearchHistory(searchWord);
  }, []);

  return (
    <S.SearchHistoryWrapper onClick={searchPost}>
      <span>{searchWord}</span>
      <div onClick={onClickDeleteSearchHistory}>
        <span>x</span>
      </div>
    </S.SearchHistoryWrapper>
  );
}
