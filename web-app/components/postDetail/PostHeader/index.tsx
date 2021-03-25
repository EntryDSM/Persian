import * as S from './style';

type Props = {
  title: string;
  createdAt: string;
  writerName: string;
};

export function PostHeader({ title, createdAt, writerName }: Props) {
  return (
    <S.PostHeaderWrapper>
      <div className='post--summary'>
        <p>{createdAt}</p>
        <h1>{title}</h1>
        <span>{writerName}</span>
      </div>
    </S.PostHeaderWrapper>
  );
}
