import { GetServerSidePropsResult } from 'next';
import { useMemo } from 'react';

import { css } from '@emotion/react';

import useSWR from 'swr';

import { toast } from 'react-toastify';

import { ScrolllLayout } from '@layouts/ScrollLayout';

import { SEO } from '@components/SEO';
import { PostList } from '@components/post/PostList';
import { Banner } from '@components/Banner';
import { LoadingSpinner } from '@components/LoadingSpinner';

import { Posts } from '@models/post/Posts';
import { Banners } from '@models/Banners';

import { homePageInfo } from '@constances/pageInfo';

import { sortPostsByCategory } from '@utils/function/sortPostsByCategory';
import { getBanners, getPosts } from '@utils/api/post/post';
import { CustomError } from '@utils/error/CustomError';

import { getConfig } from '@config/config';

type Props = {
  banners: Banners;
  posts: Posts;
  error?: CustomError;
};

export default function HomePage({ posts, banners, error }: Props) {
  if (error) {
    toast.error(error.message);
  }

  const { data: postsData, error: postsError } = useSWR<Posts, CustomError>(
    getConfig().endpoint.main.post.prefix,
    getPosts,
    {
      initialData: posts,
    }
  );

  if (postsError) {
    toast.error(postsError.message);
  }

  if (!postsData) {
    return <LoadingSpinner />;
  }

  // const { data: bannersData, error: bannersError } = useSWR<
  // { postIds: number[] },
  //   CustomError
  // >(getConfig().endpoint.main.banner.prefix,  getBanners);
 
  // if (bannersError) {
  //   toast.error(bannersError.message);
  // }

  // if (!bannersData) {
  //   return <LoadingSpinner />;
  // }

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
  try {
    const posts = await getPosts();
    const banners = await getBanners();

    return {
      props: {
        posts,
        banners: [
          {
            id: 1,
            bannerUrl: '/images/dsmBanner.png',
            link: 'https://dsmhs.djsch.kr',
          },
        ].concat(
          banners.postIds.map((id) => {
            return {
              id,
              bannerUrl:
                posts.find((post) => post.id === id)?.thumbnailUrl ?? '',
              link: `/post/${id}`,
            };
          })
        ),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        posts: [],
        banners: [],
        error: error.response,
      },
    };
  }
}
