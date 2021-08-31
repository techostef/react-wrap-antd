/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Empty from '../Empty';
import { Button } from 'antd';

export default {
  title: 'DataDisplay/Empty',
  component: Empty,
  argTypes: {
    className: argTypesEnum.STRING,
    description: null,
    dataTestId: argTypesEnum.STRING,
    image: null,
    imageStyle: argTypesEnum.OBJECT,
  },
};

const Template = (args) => (
  <Empty
    {...args}
  />
);

const TemplateEmptySimpleIcon = () => (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
)

const TemplateCustomImageContent = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
)

export const EmptyDefault = Template.bind({});
export const EmptyWithNoDescription = Template.bind({});
EmptyWithNoDescription.args = {
  description: false,
}
export const EmptySimpleIcon = TemplateEmptySimpleIcon.bind({});
export const EmptyCustomeImageContent = TemplateCustomImageContent.bind({});