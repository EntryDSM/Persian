import * as S from './style';

import Link from 'next/link';

import { Posts } from '@models/post/Posts';

import { ImageWithSkeleton } from '@components/Skeleton/ImageWithSkeleton';

type Props = {
  post: Posts[number];
};

export function PostItem({ post }: Props) {
  const { id, title, writerName, thumbnailUrl } = post;

  return (
    // <Link href={`/post/${id}`}>
    <Link href={'/post/[id]'} as={`/post/${id}`} passHref={true}>
      <S.PostItemLink>
        <S.PostItemWrapper>
          <ImageWithSkeleton
            style={S.skeletonStyle}
            src={thumbnailUrl}
            Image={({ src, onLoadImage }) => (
              <div className='thumbnail--wrapper'>
                <S.ThumbnailImage src={src} onLoad={onLoadImage} />
              </div>
            )}
          />
          <div className='touchable'>
            <h3>{title}</h3>
            <p>{writerName}</p>
          </div>
        </S.PostItemWrapper>
      </S.PostItemLink>
    </Link>
  );
}
