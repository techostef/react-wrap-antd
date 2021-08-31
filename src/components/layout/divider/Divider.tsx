import React from 'react';
import { Divider as AntdDivider, DividerProps } from 'antd';

export enum DividerOrientation {
  left = 'left',
  right = 'right',
  center = 'center',
}

export enum DividerType {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

interface IDivider extends DividerProps {}

const Divider: React.FC<IDivider> = (props) => {
  return (
    <AntdDivider
      {...props}
    />
  )
}

export default React.memo(Divider);