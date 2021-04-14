import styled from '@emotion/styled';
import { css, Interpolation, keyframes, Theme } from '@emotion/react';

const skeletonAnimation = keyframes`
  0% {
    transform: translateX(-60px);
  } 100% {
    transform: translateX(calc(100% + 60px));
  }
`;

type SkeletonWrapperProps = {
  override?: Interpolation<Theme>;
  isOn: boolean;
};

export const SkeletonWrapper = styled.div<SkeletonWrapperProps>`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(
    white,
    black
  ); // safari border radius background

  ${({ isOn }) =>
    isOn
      ? css`
          background-color: #c4c4c4;

          &::before {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
            top: 0;
            background-image: linear-gradient(
              90deg,
              #c4c4c4 0px,
              #dbd5d5 30px,
              #c4c4c4 60px
            );
            border-radius: 6px;
            animation: 2s ${skeletonAnimation} infinite linear;
          }
        `
      : css`
          background-color: #ffffff;
        `}

  ${({ override }) => override}
`;
