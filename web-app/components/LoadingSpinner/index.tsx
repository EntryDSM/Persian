import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

export function LoadingSpinner() {
  return (
    <div css={loadingSpinnerStyle}>
      <ClipLoader color='#36D7B7' loading={true} size={100} />
    </div>
  );
}

const loadingSpinnerStyle = css`
  > span {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
  }
`;
