import Link from 'next/link';

import { Skeleton } from '@components/Skeleton';

import * as S from './style';

type Props = {
  id: number;
  title: string;
  writerName: string;
  thumbnailUrl: string;
};

export function PostItem({ id, title, writerName, thumbnailUrl }: Props) {
  return (
    // <Link href={`/post/${id}`}>
    <Link href={'/post/[id]'} as={`/post/${id}`} passHref={true}>
      <S.PostItemLink>
        <S.PostItemWrapper>
          <Skeleton on={thumbnailUrl ? false : true} style={S.skeletonStyle}>
            <div className='thumbnail--wrapper'>
              <S.ThumbnailImage src={thumbnailUrl} />
            </div>
          </Skeleton>
          <div className='touchable'>
            <h3>{title}</h3>
            <p>{writerName}</p>
          </div>
        </S.PostItemWrapper>
      </S.PostItemLink>
    </Link>
  );
}
