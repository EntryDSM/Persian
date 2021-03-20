import { css } from '@emotion/react';

import { ScrolllLayout } from 'layouts/ScrollLayout';

import { ContentList } from '@components/content/content-list';
import { Banner } from 'components/banner';

export default function HomePage() {
  return (
    <ScrolllLayout y={true}>
      <Banner />
      <div
        css={css`
          padding-left: 20px;
          display: flex;
          flex-direction: column;
        `}
      >
        <ContentList hasDivideLine={true} />
        <ContentList hasDivideLine={true} />
        <ContentList hasDivideLine={false} />
      </div>
    </ScrolllLayout>
  );
}