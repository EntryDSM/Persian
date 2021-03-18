import { css } from '@emotion/react';

import { NavigationBar } from '@components/navigation-bar';

type Props = {
  children: React.ReactNode;
};

export function MobileLayout({ children }: Props) {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        height: 100%;
      `}
    >
      {children}
      <NavigationBar />
    </div>
  );
}
