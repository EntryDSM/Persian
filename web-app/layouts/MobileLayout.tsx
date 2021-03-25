import styled from '@emotion/styled';

import { NavigationBar } from '@components/NavigationBar';

type Props = {
  children: React.ReactNode;
};

export function MobileLayout({ children }: Props) {
  return (
    <MobileLayoutWrapper>
      {children}
      <NavigationBar />
    </MobileLayoutWrapper>
  );
}

const MobileLayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
