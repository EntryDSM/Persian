import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NavigationBarWrapper = styled.nav`
  max-width: 500px;
  position: fixed;
  bottom: calc(constant(safe-area-inset-bottom) + 0px);
  bottom: calc(env(safe-area-inset-bottom) + 0px);
  width: 100%;
  display: flex;
  height: 50px;
  box-sizing: border-box;
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
  background-color: #ffffff;
  position: relative;

  > a {
    position: relative;
    color: #000000;
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 4px 0;

    :active::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }

    > div {
      height: 30px;
      overflow: hidden;

      ${({ active }) =>
        active &&
        css`
          > svg {
            transition: 0.3s;
            transform: translateY(-30px);
            &:last-child {
              color: #222222 !important;
            }
          }
        `}
      
      }

      > span {
        color: ${({ active }) => (active ? '#222222' : '#bbbbbb')};
        width: 100%;
        display: block;
        margin: 0 auto;
        font-size: 12px;
        position: absolute;
        text-align: center;
        bottom: 4px;
      }

      .icon {
        width: 30px;
        height: 30px;
        color: #bbbbbb;
        display: block;
        margin: 0 auto;
      }
    }
  }
`;
