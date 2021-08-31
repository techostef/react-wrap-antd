import React from 'react';
import { Row as RowComp, RowProps } from 'antd';

export enum RowAlign {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
}

export enum RowJustify {
  start = 'start',
  end = 'end',
  center = 'center',
  spaceAround = 'space-around',
  spaceBetween = 'space-between',
}

interface IRow extends RowProps {}

const Row: React.FC<IRow> = (props) => {
  return (
    <RowComp {...props} />
  )
};

export default Row;
