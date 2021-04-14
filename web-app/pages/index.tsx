import { GetServerSidePropsResult } from 'next';
import { useMemo } from 'react';

import useSWR from 'swr';

import { css } from '@emotion/react';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { SEO } from '@components/SEO';
import { PostList } from '@components/post/PostList';
import { Banner } from '@components/Banner';
import { LoadingSpinner } from '@components/LoadingSpinner';

import { sortPostsByCategory } from '@utils/function/sortPostsByCategory';

import { homePageInfo } from 'constances/pageInfo';

import { posts as mockPost, Post } from 'mocks/posts';
import { Banner as BannerType, banners } from 'mocks/banners';

type Props = {
  banners: BannerType[];
  posts: Post[];
};

export default function HomePage({ posts, banners }: Props) {
  const { data: postsData, error: postsError } = useSWR<Post[]>(
    '/posts',
    () => posts,
    {
      initialData: posts,
    }
  );

  if (postsError) {
    alert(postsError);
    return <h1>Error</h1>;
  }

  if (!postsData) {
    return <LoadingSpinner />;
  }

  const { data: bannersData, error: bannersError } = useSWR<BannerType[]>(
    '/posts',
    () => banners,
    {
      initialData: banners,
    }
  );

  if (bannersError) {
    alert(bannersError);
    return <h1>Error</h1>;
  }

  if (!bannersData) {
    return <LoadingSpinner />;
  }

  const mappedPosts = useMemo(() => {
    return sortPostsByCategory(posts);
  }, [posts]);

  const postList = useMemo(
    () =>
      mappedPosts.map((post, index) => (
        <PostList
          key={post.category}
          category={post.category}
          posts={post.items}
          hasDivideLine={index !== mappedPosts.length - 1}
        />
      )),

    [mappedPosts]
  );

  return (
    <>
      <SEO {...homePageInfo.seo} />
      <ScrolllLayout y={true} style={homePageStyle}>
        <Banner banners={banners} />
        <div>{postList}</div>
      </ScrolllLayout>
    </>
  );
}

const homePageStyle = css`
  > div {
    height: fit-content;
    padding-bottom: 20px;
    padding-left: 20px;
  }
`;

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  return {
    props: {
      posts: mockPost,
      banners: banners,
    },
  };
}
