/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';

import Checkbox from '../Checkbox';

export default {
  title: 'DataEntry/Checkbox/CheckboxGroup',
  component: Checkbox,
  argTypes: {
    autoFocus: argTypesEnum.BOOL_FALSE,
    checked: argTypesEnum.BOOL_FALSE,
    defaultChecked: argTypesEnum.BOOL_FALSE,
    disabled: argTypesEnum.BOOL_FALSE,
    disabled: argTypesEnum.BOOL_FALSE,
    indeterminate: argTypesEnum.BOOL_FALSE,
    onChange: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Checkbox.Group {...args} />
);

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  options: ['Apple', 'Pear', 'Orange'],
  value: ['Apple', 'Orange'],
};
