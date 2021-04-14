import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PostItemLink = styled.a`
  display: inline-block;
  width: calc(100% / 3 - 10px);
  vertical-align: top;

  & + & {
    margin-left: 20px;
  }
`;

export const PostItemWrapper = styled.section`
  position: relative;
  width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:active > .touchable {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .thumbnail--wrapper {
    width: 100%;
    padding-top: 100%;
  }

  .touchable {
    > h3 {
      white-space: break-spaces;
      margin: 8px 0 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      white-space: pre-wrap;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

export const skeletonStyle = css`
  border-radius: 6px;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

type ThumbnailImageProps = {
  src: string;
};

export const ThumbnailImage = styled.div<ThumbnailImageProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
