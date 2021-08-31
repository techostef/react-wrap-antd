/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import argTypesEnum from '../../../../../enums/argTypesEnum';

import Button, { ButtonHtmlType, ButtonShape, ButtonSize, ButtonType } from '../Button';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    danger: argTypesEnum.BOOL_FALSE,
    dataTestId: argTypesEnum.STRING,
    disabled: argTypesEnum.BOOL_FALSE,
    href: argTypesEnum.STRING,
    htmlType: argTypesEnum.RADIO({
      defaultValue: ButtonHtmlType.button,
      options: ButtonHtmlType,
    }),
    icon: null,
    loading: argTypesEnum.BOOL_FALSE,
    onClick: argTypesEnum.EVENTS,
    shape: argTypesEnum.RADIO({
      defaultValue: ButtonShape.default,
      options: ButtonShape,
    }),
    size: argTypesEnum.RADIO({
      defaultValue: ButtonSize.middle,
      options: ButtonSize,
    }),
    type: argTypesEnum.RADIO({
      defaultValue: ButtonType.default,
      options: ButtonType,
    }),
  },
};

const Template = (args) => (
  <Button
    {...args}
  />
);

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  children: 'Text',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  icon: <SearchOutlined />,
  children: 'Text',
};
