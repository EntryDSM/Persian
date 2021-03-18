import { Skeleton } from '@components/skeleton-ui/Skeleton';
import * as S from './style';

export function ContentItem() {
  return (
    <S.ContentItemWrapper>
      <Skeleton width='calc(100vw / 3 - 10px)' on={true}>
        <div></div>
      </Skeleton>
      <h3>제목</h3>
      <p>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        내용내용내용내용내용내용내용내용내용내용
        내용내용내용내용내용내용내용내용내용내용
        내용내용내용내용내용내용내용내용내용내용
      </p>
    </S.ContentItemWrapper>
  );
}
