import React from 'react';
import { Slider as SliderComp, SliderSingleProps } from 'antd';

declare type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
interface SliderMarks {
  [key: number]: React.ReactNode | {
      style: React.CSSProperties;
      label: React.ReactNode;
  };
}
interface SliderBaseProps {
  prefixCls?: string;
  tooltipPrefixCls?: string;
  reverse?: boolean;
  min?: number;
  max?: number;
  step?: null | number;
  marks?: SliderMarks;
  dots?: boolean;
  included?: boolean;
  disabled?: boolean;
  vertical?: boolean;
  tipFormatter?: null | ((value?: number) => React.ReactNode);
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  tooltipVisible?: boolean;
  tooltipPlacement?: TooltipPlacement;
  getTooltipPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  autoFocus?: boolean;
}

interface SliderRange {
  draggableTrack?: boolean;
}

interface SliderRangeProps extends SliderBaseProps {
  range: true | SliderRange;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
  onAfterChange?: (value: [number, number]) => void;
  handleStyle?: React.CSSProperties[];
  trackStyle?: React.CSSProperties[];
}

// interface ISlider extends SliderSingleProps {
// }

const Slider: React.FC<(SliderSingleProps | SliderRangeProps)> = ({children, ...props}) => {

  return (
    <SliderComp
      {...props}
    />
  );
};

export default React.memo(Slider);
