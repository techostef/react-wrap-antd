import React from 'react';
import { Carousel as CarouselComp, CarouselProps } from 'antd';

export enum CarouselEffect {
  fade = 'fade',
  scrollx = 'scrollx',
}

export enum CarouselDotPosition {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top',
}

interface ICarousel extends CarouselProps{}

const Carousel: React.FC<ICarousel> = (props) => {
  return (
    <CarouselComp {...props} />
  );
};

export default React.memo(Carousel);

