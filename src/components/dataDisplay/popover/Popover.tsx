import React from 'react';
import { Popover as PopoverComp, PopoverProps } from 'antd';

export enum PopoverTrigger {
  click = 'click',
  focus = 'focus',
  hover = 'hover',
}

export enum PopoverPlacement {
  topLeft = 'topLeft',
  top = 'top',
  topRight = 'topRight',
  leftTop = 'leftTop',
  left = 'left',
  leftBottom = 'leftBottom',
  rightTop = 'rightTop',
  right = 'right',
  rightBottom = 'rightBottom',
  bottomLeft = 'bottomLeft',
  bottom = 'bottom',
  bottomRight = 'bottomRight',
}

interface IPopover extends PopoverProps{}

const Popover: React.FC<IPopover> = (props) => {
  return (
    <PopoverComp {...props} />
  );
};

export default React.memo(Popover);

