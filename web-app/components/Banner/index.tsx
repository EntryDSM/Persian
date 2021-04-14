import { Skeleton } from '@components/Skeleton';

import * as S from './style';

import { useBanner } from 'hooks/domain/useBanner';

import { Banner as BannerType } from 'mocks/banners';
import { useMemo } from 'react';
import Link from 'next/link';

type Props = {
  banners: BannerType[];
};

export function Banner({ banners }: Props) {
  const [sliderRef, currentSlide] = useBanner();

  const bannerList = useMemo(
    () =>
      banners.map((banner) => (
        <Link href={banner.link} passHref={true} key={banner.id}>
          <a className='keen-slider__slide'>
            <Skeleton on={!banner.bannerUrl}>
              <S.BannerImage className='banner--image' src={banner.bannerUrl} />
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
