import { useMemo } from 'react';

import styled from '@emotion/styled';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { SearchBar, SearchHistoryItem } from '@components/search';

import {
  SearchHistoryProvider,
  useSearchHistory,
} from '@utils/contextAPI/searchHistory';
import {
  SearchResultProvider,
  useSearchResult,
} from '@utils/contextAPI/searchResult';

import { PostList } from '@components/post';
import { sortPostsByCategory } from '@utils/function/sortPostsByCategory';

export default function SearchPageWithProvider() {
  return (
    <SearchHistoryProvider>
      <SearchResultProvider>
        <SearchPage />
      </SearchResultProvider>
    </SearchHistoryProvider>
  );
}

function SearchPage() {
  const { searchHistory } = useSearchHistory();
  const { searchResult } = useSearchResult();

  const mappedPosts = useMemo(() => {
    return searchResult ? sortPostsByCategory(searchResult) : null;
  }, [searchResult]);

  return (
    <SearchPageWrapper>
      <SearchBar />
      <ScrolllLayout y={true}>
        <div className='search__history--wrapper'>
          {searchHistory.map((searchWord) => (
            <SearchHistoryItem key={searchWord} searchWord={searchWord} />
          ))}
        </div>
        {mappedPosts === null ? (
          <p className='not-found--text'>검색 결과가 없습니다.</p>
        ) : (
          mappedPosts.map((post, index) => (
            <PostList
              key={post.category}
              category={post.category}
              posts={post.items}
              hasDivideLine={index !== mappedPosts.length - 1}
            />
          ))
        )}
        {/* <h2
          css={css`
            margin-top: 14px;
            margin-bottom: 8px;
          `}
        >
          추천 검색어 👍
        </h2> */}

        {/* <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested />
          <Suggested /> */}
      </ScrolllLayout>
    </SearchPageWrapper>
  );
}

const SearchPageWrapper = styled.div`
  height: 100%;
  padding: 20px;
  padding-bottom: 0;

  .search__history--wrapper {
    padding: 0 4px;
    display: flex;
    flex-wrap: wrap;
  }

  .not-found--text {
    margin: 18px 4px 0;
    color: rgb(73, 80, 87);
  }
`;
