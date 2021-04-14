import styled from '@emotion/styled';

export const SearchHistoryWrapper = styled.button`
  display: flex;
  margin-right: 12px;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  margin-top: 20px;
  min-height: 30px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  padding: 7px 14px;

  > span {
    font-weight: bold;
  }

  > div {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    margin-left: 8px;
  }
`;
