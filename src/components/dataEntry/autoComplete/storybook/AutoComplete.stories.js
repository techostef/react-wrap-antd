/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';

import AutoComplete, { IAutoCompletePlacement } from '../AutoComplete';

export default {
  title: 'DataEntry/AutoComplete',
  component: AutoComplete,
  argTypes: {
    autoFocus: argTypesEnum.BOOL_FALSE,
    defaultValue: argTypesEnum.STRING,
    filterOption: argTypesEnum.BOOL_FALSE,
    getPopupContainer: null,
    notFoundContent: argTypesEnum.STRING,
    placement: argTypesEnum.RADIO({
      defaultValue: IAutoCompletePlacement.bottom,
      options: IAutoCompletePlacement,
    }),
    prefix: argTypesEnum.STRING,
    split: argTypesEnum.STRING,
    validateSearch: argTypesEnum.STRING,
    value: argTypesEnum.STRING,

    onBlur: argTypesEnum.EVENTS,
    onChange: argTypesEnum.EVENTS,
    onFocus: argTypesEnum.EVENTS,
    onResize: argTypesEnum.EVENTS,
    onSearch: argTypesEnum.EVENTS,
    onSelect: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <AutoComplete
    {...args}
  />
);

const TemplateBasicUsage = () => {
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const [value, setValue] = useState('test');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    console.log('data', data)
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
}

export const AutoCompleteDefault = Template.bind({});
AutoCompleteDefault.args = {
  children: 'Text',
  placeholder: "autocomplate",
  options: [
    {
      label: 'value 1',
      value: 'value 1',
    },
    {
      label: 'value 2',
      value: 'value 2',
    },
    {
      label: 'value 3',
      value: 'value 3',
    },
  ],
  style: {
    width: 300
  },
};

export const AutoCompleteBasicUsage = TemplateBasicUsage.bind({});
