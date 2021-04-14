import Head from 'next/head';

import { memo } from 'react';

export type SEOProps = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  author: string;
  keywords: string[];
};

export const SEO = memo(function ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  author,
  keywords,
}: SEOProps) {
  return (
    <Head>
      <title>INIT - {title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content={keywords
          .join(`, `)
          .concat(author)
          .concat(...title.split(' '))}
      />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content={ogUrl} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={ogTitle} />
      <meta name='twitter:site' content={ogUrl} />
      <meta name='twitter:description' content={ogDescription} />
      <meta name='twitter:image' content={ogImage} />
    </Head>
  );
});
