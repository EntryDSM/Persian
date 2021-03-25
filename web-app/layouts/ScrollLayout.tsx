import { Interpolation, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  x?: boolean;
  y?: boolean;
  style?: Interpolation<Theme>;
};

export function ScrolllLayout({ children, x, y, style }: Props) {
  return (
    <ScrollLayoutWrapper overflowX={x} overflowY={y} override={style}>
      {children}
    </ScrollLayoutWrapper>
  );
}

type ScrollLayoutWrapperProps = {
  overflowX?: boolean;
  overflowY?: boolean;
  override?: Interpolation<Theme>;
};

const ScrollLayoutWrapper = styled.div<ScrollLayoutWrapperProps>`
  width: 100%;
  height: 100%;

  overflow-x: ${({ overflowX }) => (overflowX ? 'scroll' : 'visible')};
  overflow-y: ${({ overflowY }) => (overflowY ? 'scroll' : 'visible')};

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ${({ override }) => override}
`;
