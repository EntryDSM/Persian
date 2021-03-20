import { css } from '@emotion/react';
import { ScrolllLayout } from 'layouts/ScrollLayout';
import { ContentItem } from '../content-item';
import * as S from './style';

type Props = {
  hasDivideLine: boolean;
};

export function ContentList({ hasDivideLine }: Props) {
  return (
    <S.ContentListWrapper>
      <h2>라이트닝 토크</h2>
      <ScrolllLayout
        x={true}
        style={css`
          white-space: nowrap;
          padding-right: 20px;
          white-space: nowrap;
        `}
      >
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </ScrolllLayout>
      {hasDivideLine && <hr />}
    </S.ContentListWrapper>
  );
}
