import React from 'react';
import { Descriptions as DescriptionsComp, DescriptionsProps } from 'antd';

export enum DescriptionsLayout {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export enum DescriptionsSize {
  default = 'default',
  middle = 'middle',
  small = 'small',
}

interface IDescriptions extends DescriptionsProps {}

const Descriptions: React.FC<IDescriptions> & {
  Item: typeof DescriptionsComp.Item
} = (props) => {
  return (
    <DescriptionsComp {...props} />
  )
};

Descriptions.Item = DescriptionsComp.Item

export default Descriptions;

