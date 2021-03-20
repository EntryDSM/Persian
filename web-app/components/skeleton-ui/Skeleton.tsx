import { css, Interpolation, keyframes, Theme } from '@emotion/react';

const getSkeletonAnimation = (width: string) => keyframes`
  0% {
    background-position-x: -90px;
  }
  1% {
    background-position-x: 0;
  }
  40%, 100% {
    background-position-x: ${width};
  }
`;

type Props = {
  width: string;
  children: React.ReactNode;
  on: boolean;
  style?: Interpolation<Theme>;
};

export function Skeleton({ width, children, on, style }: Props) {
  return (
    <div
      css={[
        css`
          width: ${width};
          height: fit-content;
          margin: 0;
          background-image: linear-gradient(
            90deg,
            /* #e0e0e0 0px,
            #ededed 30px,
            #e0e0e0 60px */
              #c4c4c4 0px,
            #dbd5d5 30px,
            #c4c4c4 60px
          );
          background-size: calc(${width} + 90px) auto;
        `,
        on &&
          css`
            animation: ${getSkeletonAnimation(width)} 2s infinite ease-out;
          `,
        style,
      ]}
    >
      {children}
    </div>
  );
}
