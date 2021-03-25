import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import useSWR from 'swr';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { PostContent, PostHeader } from '@components/postDetail';

import { Post, posts } from 'mock/posts';
import { LoadingSpinner } from '@components/LoadingSpinner';

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  const { data, error } = useSWR<Post>(`/post/${post.id}`, () => post, {
    initialData: post,
  });

  if (error) {
    return alert(error);
  }

  if (!data) {
    return <LoadingSpinner />;
  }

  const { title, createdAt, writerName, contentHTML } = data;

  return (
    <ScrolllLayout y={true}>
      <PostHeader title={title} createdAt={createdAt} writerName={writerName} />
      <PostContent contentHTML={contentHTML} />
    </ScrolllLayout>
  );
}

type QueryParams = {
  id: string;
};

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<QueryParams>): Promise<
  GetServerSidePropsResult<Props>
> {
  let index;

  if (
    ((index = posts.findIndex((post) => post.id === Number(params?.id))),
    index === -1)
  ) {
    return {
      notFound: true,
    };
  }

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
