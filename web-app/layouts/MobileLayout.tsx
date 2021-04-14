import styled from '@emotion/styled';

import { NavigationBar } from '@components/NavigationBar';
import { useEffect } from 'react';

type Props = {
  children: JSX.Element;
};

export function MobileLayout({ children }: Props) {
  useEffect(() => {
    document
      .querySelector('#__next')
      ?.setAttribute('style', `height: ${window.innerHeight}px`);
    window.addEventListener('resize', () => {
      document
        .querySelector('#__next')
        ?.setAttribute('style', `height: ${window.innerHeight}px`);
    });
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
