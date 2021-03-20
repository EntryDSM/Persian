import { css, Interpolation, Theme } from '@emotion/react';

type Props = {
  children: React.ReactNode;
  x?: boolean;
  y?: boolean;
  style?: Interpolation<Theme>;
};

export function ScrolllLayout({ children, x, y, style }: Props) {
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
        style,
      ]}
    >
      {children}
    </div>
  );
}
