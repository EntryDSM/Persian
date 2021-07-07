import styled from '@emotion/styled';

import { useEffect } from 'react';

import { NavigationBar } from '@components/NavigationBar';

type Props = {
  children: React.ReactNode;
};

export function MobileLayout({ children }: Props) {
  useEffect(() => {
    const nextjsRootElement = document.getElementById('__next');

    if (nextjsRootElement) {
      nextjsRootElement.setAttribute(
        'style',
        `height: ${window.innerHeight}px`
      );

      window.addEventListener('resize', () => {
        nextjsRootElement.setAttribute(
          'style',
          `height: ${window.innerHeight}px`
        );
      });
    }
  }, []);

  return (
    <MobileLayoutWrapper>
      {children}
      <NavigationBar />
    </MobileLayoutWrapper>
  );
}

const MobileLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: calc(constant(safe-area-inset-bottom) + 50px);
  padding-bottom: calc(env(safe-area-inset-bottom) + 50px);
`;
