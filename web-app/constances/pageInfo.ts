import { SEOProps } from '@components/SEO';

const domain = 'https://init.entrydsm.hs.kr';

type PageInfo = {
  url: string;
  seo: SEOProps;
};

export const homePageInfo: PageInfo = {
  url: '/',
  seo: {
    title: 'HOME',
    description: '대덕소프트웨어마이스터고등학교 커뮤니티',
    ogTitle: 'INIT',
    ogDescription: '대덕소프트웨어마이스터고등학교 커뮤니티',
    ogUrl: domain,
    ogImage: `${domain}/images/logo.svg`,
    author: 'EntryDSM',
    keywords: ['대덕소프트웨어마이스터고등학교', '대덕', '소프트웨어마이스터고등학교', '커뮤니티'],
  },
};

type PostDetailPageInfoParameter = {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  author: string;
};

export const getPostDetailPageInfo = ({
  id,
  title,
  description,
  thumbnailUrl,
  author,
}: PostDetailPageInfoParameter): PageInfo => ({
  url: `/page/${id}`,
  seo: {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: `${domain}/page/${id}`,
    ogImage: `${thumbnailUrl}`,
    author: author,
    keywords: [
      '대덕소프트웨어마이스터고등학교',
      '소프트웨어마이스터고등학교',
      '마이스터고등학교',
    ],
  },
});
