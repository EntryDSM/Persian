import * as S from './style';

import Link from 'next/link';

import { useMemo } from 'react';

import { Skeleton } from '@components/Skeleton';

import { Banners } from '@models/Banners';

import { useBanner } from '@hooks/domain/useBanner';

type Props = {
  banners: Banners;
};

export function Banner({ banners }: Props) {
  const [sliderRef, currentSlide] = useBanner();

  const bannerList = useMemo(
    () =>
      banners.map(({ link, id, bannerUrl }) => (
        <Link href={link} passHref={true} key={id}>
          <a className='keen-slider__slide' target='_blank'>
            <Skeleton on={!bannerUrl}>
              <S.BannerImage className='banner--image' src={bannerUrl} />
            </Skeleton>
          </a>
        </Link>
      )),
    [banners]
  );

  return (
    <S.BannerSection>
      <div ref={sliderRef} className='keen-slider'>
        {bannerList}
      </div>
      <S.Indicator>
        {currentSlide} / {banners.length}
      </S.Indicator>
    </S.BannerSection>
  );
}
