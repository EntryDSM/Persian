import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { useMemo } from 'react';

import useSWR from 'swr';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { PostContent, PostHeader } from '@components/postDetail';
import { LoadingSpinner } from '@components/LoadingSpinner';
import { SEO } from '@components/SEO';

import { getPostDetailPageInfo } from 'constances/pageInfo';

import { Post, posts } from 'mocks/posts';

export type PostPageProps = {
  post: Post;
  test: string;
};

export default function PostPage({ post }: PostPageProps) {
  const { data, error } = useSWR<Post>(`/post/${post.id}`, () => post, {
    initialData: post,
  });

  if (error) {
    alert(error);
    return <h1>Error</h1>;
  }

  if (!data) {
    return <LoadingSpinner />;
  }

  const {
    id,
    title,
    createdAt,
    description,
    writerName,
    contentHTML,
    thumbnailUrl,
  } = data;

  const SEOProps = useMemo(() => {
    return getPostDetailPageInfo({
      id,
      title,
      description,
      thumbnailUrl,
      author: writerName,
    }).seo;
  }, [data]);

  return (
    <>
      <SEO {...SEOProps} />
      <ScrolllLayout y={true}>
        <PostHeader
          title={title}
          createdAt={createdAt}
          writerName={writerName}
        />
        <PostContent contentHTML={contentHTML} />
      </ScrolllLayout>
    </>
  );
}

type QueryParams = {
  id: string;
};

export async function getServerSideProps({
  req,
  params,
}: GetServerSidePropsContext<QueryParams>): Promise<
  GetServerSidePropsResult<PostPageProps>
> {
  const index = posts.findIndex((post) => post.id === Number(params?.id));
  const isNotFoundPost = index === -1;

  if (isNotFoundPost) {
    return {
      notFound: true,
    };
  }

  // console.log(req);

  const {
    title,
    createdAt,
    writerName,
    thumbnailUrl,
    contentHTML,
    id,
    category,
  } = posts[index];

  return {
    props: {
      test: req ? 'req' : 'none',
      post: {
        id: id,
        category,
        title,
        createdAt,
        writerName,
        thumbnailUrl,
        contentHTML,
      },
    },
  };
}
