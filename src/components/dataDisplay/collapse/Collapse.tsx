import React from 'react';
import { Collapse as CollapseComp, CollapseProps } from 'antd';

export enum CollapseExpandIConPosition {
  left = 'left',
  right = 'right',
}

export enum CollapseCollapsible {
  disabled = 'disabled',
  header = 'header,'
}

interface ICollapse extends CollapseProps{}

const Collapse: React.FC<ICollapse> & {
  Panel: typeof CollapseComp.Panel
} = (props) => {
  return (
   <CollapseComp {...props} />
  );
};

Collapse.Panel = CollapseComp.Panel

export default Collapse;

