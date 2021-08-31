/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';

import Input from '../Input';

export default {
  title: 'DataEntry/Input/InputTextArea',
  component: Input,
  argTypes: {
    allowClear: argTypesEnum.BOOL_FALSE,
    autoSize: argTypesEnum.BOOL_FALSE,
    bordered: argTypesEnum.BOOL_TRUE,
    defaultValue: argTypesEnum.STRING,
    disabled: argTypesEnum.BOOL_FALSE,
    id: argTypesEnum.STRING,
    maxLength: argTypesEnum.NUMBER,
    showCount: null,
    value: argTypesEnum.STRING,
    onChange: argTypesEnum.EVENTS,
    onPressEnter: argTypesEnum.EVENTS,
    onResize: argTypesEnum.EVENTS,
  },
};

const TemplateTextArea = (args) => (
  <Input.TextArea {...args}/>
);

export const InputTextArea = TemplateTextArea.bind({});
