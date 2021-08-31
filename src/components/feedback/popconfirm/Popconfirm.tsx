import React from 'react';
import { Popconfirm as PopconfirmComp, PopconfirmProps } from 'antd';

export enum PopconfirmPlacement {
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

export enum PopconfirmTrigger {
  click = 'click',
  hover = 'hover',
  focus = 'focus',
}

export enum PopconfirmButtonType {
  primary = 'primary',
}

interface IPopconfirm extends PopconfirmProps {}

const Popconfirm: React.FC<IPopconfirm> = (props) => {
  return (
    <PopconfirmComp {...props} />
  );
}

export default Popconfirm;