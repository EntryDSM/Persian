import { useEffect, useRef, useState, RefObject } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type UseBanner = [RefObject<HTMLDivElement>, number];

export function useBanner(): UseBanner {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    duration: 1000,
    slideChanged(slider) {
      setCurrentSlide(slider.details().relativeSlide + 1);
    },
  });

  const isDidMount = useRef(false);

  useEffect(() => {
    if (!isDidMount.current && slider) {
      isDidMount.current = true;

      const interval = setInterval(() => {
        slider.next();
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [slider]);

  return [sliderRef, currentSlide];
}
