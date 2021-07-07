import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useMemo } from 'react';

import useSWR from 'swr';

import styled from '@emotion/styled';

import { toast } from 'react-toastify';

import { ScrolllLayout } from '@layouts/ScrollLayout';

import { SearchBar, SearchHistoryItem } from '@components/search';
import { PostItem, PostList } from '@components/post';
import { LoadingSpinner } from '@components/LoadingSpinner';

import { Posts } from '@models/post/Posts';

import { getConfig } from '@config/config';

import { useSearch } from '@hooks/domain/useSearch';

import {
  SearchHistoryProvider,
  useSearchHistory,
} from '@utils/contextAPI/searchHistory';
import {
  SearchResultProvider,
  useSearchResult,
} from '@utils/contextAPI/searchResult';
import { sortPostsByCategory } from '@utils/function/sortPostsByCategory';
import { searchPost } from '@utils/api/search/search';
import { CustomError } from '@utils/error/CustomError';
import { css } from '@emotion/react';
import { getBestPosts } from '@utils/api/post/post';

type SearchPageProps = {
  posts: Posts;
  bestPosts: Posts;
  error?: CustomError;
};

export default function SearchPageWithProvider(props: SearchPageProps) {
  return (
    <SearchHistoryProvider>
      <SearchResultProvider>
        <SearchPage {...props} />
      </SearchResultProvider>
    </SearchHistoryProvider>
  );
}

function SearchPage({ posts, bestPosts, error }: SearchPageProps) {
  if (error) {
    toast.error(error.message);
  }

  const [keyword] = useSearch();

  const { data: postsData, error: postError } = useSWR<Posts, CustomError>(
    getConfig().endpoint.main.search.withKeyword(keyword),
    () => searchPost(keyword),
    {
      initialData: posts,
    }
  );

  if (postError) {
    toast.error(postError.message);
  }

  if (!postsData) {
    return <LoadingSpinner />;
  }

  const { data: bestPostsData, error: bestPostsError } = useSWR<
    Posts,
    CustomError
  >(getConfig().endpoint.main.post.best(), () => searchPost(keyword), {
    initialData: bestPosts,
  });

  if (bestPostsError) {
    toast.error(bestPostsError.message);
  }

  if (!bestPostsData) {
    return <LoadingSpinner />;
  }

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
        <h2
          css={css`
            margin-top: 14px;
            margin-bottom: 8px;
          `}
        >
          EntryDSM 게시글 👍
        </h2>

        {bestPostsData.map((post) => (
          <PostItem post={post} />
        ))}
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

type QueryParams = {
  q: string;
};

export async function getServerSideProps({
  req,
  params,
}: GetServerSidePropsContext<QueryParams>): Promise<
  GetServerSidePropsResult<SearchPageProps>
> {
  const keyword = typeof params?.q === 'object' ? params?.q[0] : params?.q;

  try {
    const posts = keyword ? await searchPost(keyword) : [];
    const bestPosts = await getBestPosts();

    return {
      props: {
        posts,
        bestPosts,
      },
    };
  } catch (_error) {
    const error: CustomError = _error.response;
    const { status } = error;

    if (status === 404) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        posts: [],
        bestPosts: [],
        error,
      },
    };
  }
}
