import React from 'react';
import { Spin as SpinComp, SpinProps } from 'antd';

export enum SpinSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface ISpin extends SpinProps {}

const Spin: React.FC<ISpin> = (props) => {
  return (
    <SpinComp {...props} />
  )
}

export default React.memo(Spin);