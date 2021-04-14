export type Banner = {
  id: number;
  bannerUrl: string;
  link: string;
};

export const banners: Banner[] = [
  {
    id: 1,
    bannerUrl: '/images/introduction.png',
    link: 'post/5',
  },
  {
    id: 2,
    bannerUrl: '/images/entryBanner.png',
    link: '',
  },
  {
    id: 3,
    bannerUrl: '/images/dsmBanner2.png',
    link: '',
  },
];
