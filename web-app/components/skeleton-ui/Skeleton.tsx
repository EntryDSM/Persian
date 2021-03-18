import { css, keyframes } from '@emotion/react';

const skeleton = keyframes`
  0% {
    background-position-x: -90px;
  }
  1% {
    background-position-x: 0;
  }
  40%, 100% {
    background-position-x: 100vw; 
  }
`;

type Props = {
  width: string;
  children: React.ReactNode;
  on: boolean;
};

export function Skeleton({ width, children, on }: Props) {
  return (
    <div
      css={[
        css`
          width: 100%;
          background-image: linear-gradient(
            90deg,
            #e0e0e0 0px,
            #ededed 30px,
            #e0e0e0 60px
          );
          background-size: calc(${width} + 90px) auto;
        `,
        on &&
          css`
            animation: ${skeleton} 2s infinite ease-out;
          `,
      ]}
    >
      {children}
    </div>
  );
}
