import { Interpolation, Theme } from '@emotion/react';

import { useState, useCallback, FC, ReactEventHandler } from 'react';

import { Skeleton } from './';

type ImageProps = {
  src: string;
  onLoadImage: ReactEventHandler<HTMLImageElement>;
};

type Props = {
  style?: Interpolation<Theme>;
  src: string;
  Image: FC<ImageProps>;
};

export function ImageWithSkeleton({ style, src, Image }: Props) {
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  const onLoadImage = useCallback(() => {
    setIsLoadedImage(true);
  }, []);

  return (
    <Skeleton on={!isLoadedImage} style={style}>
      <Image src={src} onLoadImage={onLoadImage} />
    </Skeleton>
  );
}
