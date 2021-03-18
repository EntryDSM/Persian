import { ScrolllLayout } from 'layouts/ScrollLayout';
import { ContentItem } from '../content-item';
import * as S from './style';

export function ContentList() {
  return (
    <S.ContentListWrapper>
      <h2>라이트닝 토크</h2>
      <ScrolllLayout x={true}>
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </ScrolllLayout>
      <hr />
    </S.ContentListWrapper>
  );
}
