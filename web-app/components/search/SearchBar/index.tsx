import { ChangeEvent, FormEvent, useState } from 'react';

import * as S from './style';

import { useSearch } from 'hooks/domain/useSearch';

import { useSearchHistory } from '@utils/contextAPI/searchHistory';

import { Category, Post, posts } from '@mocks/posts';

const newPosts: Array<{ category: Category; items: Post[] }> = [];

posts.forEach((post) => {
  let index = newPosts.findIndex((p) => p.category === post.category);

  if (index === -1) {
    index = newPosts.length;
    newPosts[index] = {
      category: post.category,
      items: [],
    };
  }

  newPosts[index].items.push(post);
});

export function SearchBar() {
  const [changeSearchQueryUrl] = useSearch();
  const { addSearchHistory } = useSearchHistory();

  const [searchWord, setSearchWord] = useState<string>('');

  function onChangeSearchWord(e: ChangeEvent<HTMLInputElement>) {
    setSearchWord(e.target.value);
  }

  function onSubmitSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    changeSearchQueryUrl(searchWord);
    addSearchHistory(searchWord);
  }

  return (
    <S.SearchBarWrapper onSubmit={onSubmitSearch}>
      <label>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12.707'
          height='12.707'
          viewBox='0 0 12.707 12.707'
        >
          <g id='그룹_86' data-name='그룹 86' opacity='0.9'>
            <g
              id='타원_46'
              data-name='타원 46'
              fill='none'
              stroke='#1d1d1d'
              strokeWidth='1'
            >
              <circle cx='5.5' cy='5.5' r='5.5' stroke='none' />
              <circle cx='5.5' cy='5.5' r='5' fill='none' />
            </g>
            <line
              id='선_53'
              data-name='선 53'
              x2='3'
              y2='3'
              transform='translate(9 9)'
              fill='none'
              stroke='#1d1d1d'
              strokeWidth='2'
            />
          </g>
        </svg>
        <input
          type='text'
          placeholder='검색어를 입력해주세요'
          value={searchWord}
          onChange={onChangeSearchWord}
        />
      </label>
    </S.SearchBarWrapper>
  );
}
