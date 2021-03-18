import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
  x?: boolean;
  y?: boolean;
};

export function ScrolllLayout({ children, x, y }: Props) {
  return (
    <div
      css={[
        css`
          width: 100%;
          height: 100%;

          &::-webkit-scrollbar {
            display: none;
          }

          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        `,
        css`
          overflow-x: ${x ? 'scroll' : 'hidden'};
          overflow-y: ${y ? 'scroll' : 'hidden'};
        `,
      ]}
    >
      {children}
    </div>
  );
}
