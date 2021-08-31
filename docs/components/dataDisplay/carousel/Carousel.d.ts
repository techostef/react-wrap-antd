import React from 'react';
import { CarouselProps } from 'antd';
export declare enum CarouselEffect {
    fade = "fade",
    scrollx = "scrollx"
}
export declare enum CarouselDotPosition {
    bottom = "bottom",
    left = "left",
    right = "right",
    top = "top"
}
interface ICarousel extends CarouselProps {
}
declare const _default: React.NamedExoticComponent<ICarousel>;
export default _default;
