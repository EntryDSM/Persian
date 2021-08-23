import * as S from './style';
import MarkdownRender from './MarkdownRender';

type Props = {
  contentHTML: string;
};

export function PostContent({ contentHTML }: Props) {
  return (
    <S.PostContentWrapper>
      <MarkdownRender markdown={contentHTML}/>
    </S.PostContentWrapper>
  )
}
