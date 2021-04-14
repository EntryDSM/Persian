import styled from '@emotion/styled';

export const SearchBarWrapper = styled.form`
  width: 100%;
  display: block;
  align-items: center;
  border: 0.5px solid #999999;
  border-radius: 4px;
  padding: 16px 16.5px;

  > label {
    display: flex;
    align-items: center;

    > svg {
      width: 20px;
      height: 20px;
    }

    > input {
      font-size: 14px;
      height: 20px;
      flex-basis: 0;
      flex-grow: 1;
      border: none;
      margin-top: 2px;
      margin-left: 4px;
    }
  }
`;
