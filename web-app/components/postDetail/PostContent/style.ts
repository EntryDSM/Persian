import styled from '@emotion/styled';

export const PostContentWrapper = styled.div`
  padding: 20px;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 10px;
    margin-bottom: 8px;
  }

  > p {
    margin-bottom: 14px;
  }

  li + li {
    margin-top: 6px;
  }

  a {
    color: blue;
  }

  img {
    width: 100%;
    margin: 8px 0;
    height: auto;
    box-shadow: 0px 2px 8px rgb(0 0 0 / 20%);
  }
`;
