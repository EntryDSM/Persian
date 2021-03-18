import { Skeleton } from '@components/skeleton-ui/Skeleton';
import { useState } from 'react';
import Slider from 'react-slick';

import * as S from './style';

export function Banner() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const onAfterBannerChange = (index: number) => {
    setBannerIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    afterChange: onAfterBannerChange,
  };

  return (
    <S.BannerSection>
      <Slider {...settings}>
        <Skeleton width='100vw' on={true}>
          <S.BannerImage src='image/b.png' />
        </Skeleton>
        <Skeleton width='100vw' on={false}>
          <S.BannerImage src='image/test.jpeg' />
        </Skeleton>
      </Slider>
      <S.Indicator>{bannerIndex + 1} / 2 </S.Indicator>
    </S.BannerSection>
  );
}

export default Banner;
