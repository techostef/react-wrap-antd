import React from 'react';
import { Space as SpaceComp, SpaceProps } from 'antd';

export enum SpaceAlign {
  start = 'start',
  end = 'end',
  center = 'center',
  baseline = 'baseline',
};

export enum SpaceDirection {
  vertical = 'vertical',
  horizontal = 'horizontal',
};

export enum SpaceSize {
  small = 'small',
  middle = 'middle',
  large = 'large'
};

interface ISpaceComp extends SpaceProps {}

const Space: React.FC<ISpaceComp> = (props) => {
  return (
    <div style={{
      flex: 'none',
      margin: '8px 4px',
      padding: '4px',
      border: '1px solid #40a9ff',
    }}>
      <SpaceComp {...props} />
    </div>
  )
}

export default React.memo(Space);