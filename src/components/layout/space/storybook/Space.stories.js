/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Card } from 'antd';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Button from '../../../general/buttons/button/Button';
import Space, { SpaceAlign, SpaceDirection, SpaceSize } from '../Space';


export default {
  title: 'Layout/Space',
  component: Space,
  argTypes: {
    align: argTypesEnum.RADIO({
      defaultValue: SpaceAlign.center,
      options: SpaceAlign,
    }),
    direction: argTypesEnum.RADIO({
      defaultValue: SpaceDirection.horizontal,
      options: SpaceDirection,
    }),
    size: argTypesEnum.RADIO({
      defaultValue: SpaceSize.small,
      options: SpaceSize
    }),
    wrap: argTypesEnum.BOOL_FALSE,
  },
};

const Template = (args) => (
  <Space {...args}>
    <Button size="small"> Button </Button>
    <Button> Button </Button>
    <Button size="large"> Button </Button>
  </Space>
);

const TemplateVerticalSpace = (args) => {
  return (
    <Space {...args} direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  )
}

export const BasicSpace = Template.bind({});
export const VerticalSpace = TemplateVerticalSpace.bind({});
