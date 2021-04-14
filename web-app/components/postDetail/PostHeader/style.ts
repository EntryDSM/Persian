import styled from '@emotion/styled';

export const PostHeaderWrapper = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #c4c4c4;

  > .post--summary {
    margin-top: 30px;
    color: #ffffff;

    > p {
      font-size: 14px;
    }

    > h1 {
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
