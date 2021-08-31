/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Switch from '../Switch';

export default {
  title: 'DataEntry/Switch',
  component: Switch,
  argTypes: {
    className: argTypesEnum.STRING,
    danger: argTypesEnum.BOOL_FALSE,
    dataTestId: argTypesEnum.STRING,
    onClick: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Switch
    {...args}
  />
);

export const SwitchDefault = Template.bind({});
SwitchDefault.args = {
  children: 'Text',
};

const TemplateExampleWithTextAndIcon = () => {
  return (
    <>
      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
    </>
  )
}

export const SwitchExampleWithTextAndIcon = TemplateExampleWithTextAndIcon.bind({});
