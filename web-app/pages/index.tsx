import { css } from '@emotion/react';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { ContentList } from '@components/content/content-list';
import { Banner } from 'components/banner';

const HomePage = () => (
  <ScrolllLayout y={true}>
    <Banner />
    <div
      css={css`
        padding-left: 10px;
        display: flex;
        flex-direction: column;
      `}
    >
      <ContentList />
      <ContentList />
      <ContentList />
    </div>
  </ScrolllLayout>
);

export default HomePage;
