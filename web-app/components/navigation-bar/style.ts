import styled from '@emotion/styled';

export const NavigationBarWrapper = styled.div`
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: relative;

  > a {
    color: #000000;
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 14px 0;

    :active::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      content: '';
    }
  }
`;
