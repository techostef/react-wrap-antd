/* eslint-disable react/jsx-props-no-spreading */
import { Space } from 'antd';
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { SizeEnum } from '../../../../enums/dataEnum';

import Radio from '../Radio';

export default {
  title: 'DataEntry/Radio/RadioGroup',
  component: Radio,
  argTypes: {
    buttonStyle: argTypesEnum.RADIO({
      defaultValue: 'outline',
      options: ['outline', 'solid']
    }),
    defaultChecked: null,
    disabled: argTypesEnum.BOOL_FALSE,
    options: argTypesEnum.ARRAY,
    optionType: argTypesEnum.RADIO({
      defaultValue: 'default',
      options: ['default', 'button'],
    }),
    size: argTypesEnum.RADIO({
      defaultValue: SizeEnum.middle,
      options: SizeEnum
    }),
    value: null,
    onChange: argTypesEnum.EVENTS,
  },
};

const TemplateGroup = (args) => (
  <Space direction={"vertical"}>
    <Radio.Group {...args}>
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group {...args}>
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </Space>
);

export const RadioGroup = TemplateGroup.bind({});