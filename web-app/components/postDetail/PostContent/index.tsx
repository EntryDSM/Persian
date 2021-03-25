import * as S from './style';

type Props = {
  contentHTML: string;
};

export function PostContent({ contentHTML }: Props) {
  return (
    <S.PostContentWrapper dangerouslySetInnerHTML={{ __html: contentHTML }} />
  );
}
