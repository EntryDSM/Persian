import { Interpolation, Theme } from '@emotion/react';
import * as S from './style';

type Props = {
  children: React.ReactNode;
  on: boolean;
  style?: Interpolation<Theme>;
};

export function Skeleton({ children, on, style }: Props) {
  return (
    <S.SkeletonWrapper isOn={on} override={style}>
      <div css></div>
      {children}
    </S.SkeletonWrapper>
  );
}
