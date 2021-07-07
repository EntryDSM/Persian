import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useMemo } from 'react';

import useSWR from 'swr';

import { toast } from 'react-toastify';

import { ScrolllLayout } from '@layouts/ScrollLayout';

import { PostContent, PostHeader } from '@components/postDetail';
import { LoadingSpinner } from '@components/LoadingSpinner';
import { SEO } from '@components/SEO';

import { PostDetail } from '@models/post/PostDetail';

import { getPostDetailPageInfo } from '@constances/pageInfo';

import { getPost } from '@utils/api/post/post';
import { CustomError } from '@utils/error/CustomError';

import { getConfig } from '@config/config';

export type PostPageProps = {
  id: number;
  post: PostDetail;
  error?: CustomError;
};

export default function PostPage({ id, post, error }: PostPageProps) {
  if (error) {
    toast.error(error.message);
  }

  const { data: postData, error: postError } = useSWR<PostDetail, CustomError>(
    getConfig().endpoint.main.post.detail(id),
    () => getPost(id),
    {
      initialData: post,
    }
  );

  if (postError) {
    toast.error(postError.message);
  }

  if (!postData) {
    return <LoadingSpinner />;
  }

  const {
    id: postId,
    title,
    description,
    content,
    image,
    writerName,
    createdAt,
  } = postData;

  const SEOProps = useMemo(() => {
    return getPostDetailPageInfo({
      id: postId,
      title,
      description,
      thumbnailUrl: image.toString(),
      author: writerName,
    }).seo;
  }, [postData]);

  return (
    <>
      <SEO {...SEOProps} />
      <ScrolllLayout y={true}>
        <PostHeader
          title={title}
          createdAt={new Date(createdAt).toLocaleDateString()}
          writerName={writerName}
        />
        <PostContent contentHTML={content} />
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
  const id = Number(params?.id);

  if (isNaN(id)) {
    return {
      notFound: true,
    };
  }

  try {
    const post = await getPost(Number(params?.id));

    return {
      props: {
        id,
        post,
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
        id,
        post: {
          image: '',
          id: 0,
          content: '',
          createdAt: new Date(),
          description: '',
          title: '',
          writerName: '',
        },
        error,
      },
    };
  }
}
