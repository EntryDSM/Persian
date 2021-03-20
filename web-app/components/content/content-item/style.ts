import styled from '@emotion/styled';

const thumbnailSize = `calc(100vw / 3 - 10px)`;

export const ContentItemWrapper = styled.article`
  width: ${thumbnailSize};
  margin-right: 20px;
  padding-bottom: 24px;

  display: inline-block;

  > div > div {
    width: ${thumbnailSize};
    height: ${thumbnailSize};
  }

  &:last-child {
    margin: 0;
  }

  > h3 {
    margin: 8px 0 2px;
  }

  > p {
    /* direction: ltr; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
