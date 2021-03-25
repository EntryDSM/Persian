import { Skeleton } from '@components/Skeleton';

import * as S from './style';

import { useBanner } from 'hooks/domain/useBanner';

import { Banner as BannerType } from 'mock/banners';
import { useMemo } from 'react';

type Props = {
  banners: BannerType[];
};

export function Banner({ banners }: Props) {
  const [sliderRef, currentSlide] = useBanner();

  const bannerList = useMemo(
    () =>
      banners.map((banner) => (
        <div className='keen-slider__slide' key={banner.id}>
          <Skeleton on={!banner.bannerUrl}>
            <S.BannerImage className='banner--image' src={banner.bannerUrl} />
          </Skeleton>
        </div>
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
