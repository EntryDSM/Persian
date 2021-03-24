import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PostListWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  text-align: left;

  > h2 {
    margin-bottom: 8px;
  }

  > hr {
    border: 0.5px solid #d7d7d7;
    margin-top: 20px;
    margin-right: 20px;
  }
`;

export const scrollLayoutStyle = css`
  white-space: nowrap;
  padding-right: 20px;
`;
