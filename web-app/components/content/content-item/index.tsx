import { Skeleton } from '@components/skeleton-ui/Skeleton';
import { css } from '@emotion/react';
import * as S from './style';

export function ContentItem() {
  return (
    <S.ContentItemWrapper>
      <Skeleton
        width='calc(100vw / 3 - 10px)'
        on={true}
        style={css`
          border-radius: 6px;
        `}
      >
        <div></div>
      </Skeleton>
      <h3>제목</h3>
      <p
        css={css`
          white-space: pre-wrap;
        `}
      >
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        내용내용내용내용내용내용내용내용내용내용
        내용내용내용내용내용내용내용내용내용내용
        내용내용내용내용내용내용내용내용내용내용
      </p>
    </S.ContentItemWrapper>
  );
}
