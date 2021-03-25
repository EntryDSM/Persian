import styled from '@emotion/styled';

export const NavigationBarWrapper = styled.nav`
  max-width: 500px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: blue;
  display: flex;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.1);
`;

type ButtonWrapperProps = {
  active: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) => (active ? '#c7c7f9' : '#ffffff')};
  position: relative;

  > a {
    color: #000000;
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 14px 0;

    :active::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
