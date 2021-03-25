import { GetServerSidePropsResult } from 'next';
import { useMemo } from 'react';

import useSWR from 'swr';

import { css } from '@emotion/react';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { PostList } from '@components/post/PostList';
import { Banner } from '@components/Banner';
import { LoadingSpinner } from '@components/LoadingSpinner';

import { posts, Post, Category } from 'mock/posts';
import { Banner as BannerType, banners } from 'mock/banners';

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
    return alert(postsError);
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
    return alert(bannersError);
  }

  if (!bannersData) {
    return <LoadingSpinner />;
  }

  const mappedPosts = useMemo(() => {
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

    return newPosts;
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
    <ScrolllLayout y={true} style={homePageStyle}>
      <Banner banners={banners} />
      <div>{postList}</div>
    </ScrolllLayout>
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
      posts: posts,
      banners: banners,
    },
  };
}
