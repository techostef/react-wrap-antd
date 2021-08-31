import React from 'react';
import { Cascader as CascaderComp, CascaderProps } from 'antd';

export enum CascaderExpandTrigger {
  click = 'click',
  hover = 'hover', 
}

export enum CascaderPopupPlacement {
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight', 
  topLeft = 'topLeft',
  topRight = 'topRight'
}

interface ICascader extends CascaderProps {
}

const Cascader: React.FC<ICascader> = ({children, ...props}) => {

  return (
    <CascaderComp
      {...props}
    />
  );
};

export default React.memo(Cascader);
