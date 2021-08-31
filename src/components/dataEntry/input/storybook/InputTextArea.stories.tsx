/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';

import Input from '../Input';

export default {
  title: 'DataEntry/Input/InputSearch',
  component: Input,
  argTypes: {
    enterButton: argTypesEnum.BOOL_FALSE,
    loading: argTypesEnum.BOOL_FALSE,
    onSearch: argTypesEnum.EVENTS,
    onChange: argTypesEnum.EVENTS,
    onPressEnter: argTypesEnum.EVENTS,
  },
};

const TemplateSearch = (args) => (
  <Input.Search {...args}/>
);

export const InputSearch = TemplateSearch.bind({});
