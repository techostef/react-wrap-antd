/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { SizeEnum } from '../../../../enums/dataEnum';

import InputNumber from '../InputNumber';

export default {
  title: 'DataEntry/InputNumber',
  component: InputNumber,
  argTypes: {
    autoFocus: argTypesEnum.BOOL_FALSE,
    bordered: argTypesEnum.BOOL_TRUE,
    decimalSeparator: argTypesEnum.STRING,
    defaultValue: argTypesEnum.NUMBER,
    disabled: argTypesEnum.BOOL_FALSE,
    formatter: argTypesEnum.EVENTS,
    keyboard: argTypesEnum.BOOL_FALSE,
    max: argTypesEnum.NUMBER,
    min: argTypesEnum.NUMBER,
    parser: argTypesEnum.EVENTS,
    precision: argTypesEnum.NUMBER,
    readOnly: argTypesEnum.BOOL_FALSE,
    size: argTypesEnum.RADIO({
      defaultValue: SizeEnum.middle,
      options: SizeEnum,
    }),
    step: argTypesEnum.NUMBER,
    stringMode: argTypesEnum.BOOL_FALSE,
    value: argTypesEnum.NUMBER,
    onChange: argTypesEnum.EVENTS,
    onPressEnter: argTypesEnum.EVENTS,
    onStep: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <InputNumber
    {...args}
  />
);

export const InputNumberDefault = Template.bind({});
InputNumberDefault.args = {
  children: 'Text',
};

const TemplateExampleSize = () => {
  const onChange = () => {}
  return (
    <div className="site-input-number-wrapper">
      <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
      <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
      <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
    </div>
  )
}

export const InputNumberExampleSize = TemplateExampleSize.bind({});

const TemplateExampleFormater = () => {
  return (
    <>
      <InputNumber
        defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
      />
      <InputNumber
        defaultValue={100}
        min={0}
        max={100}
        formatter={value => `${value}%`}
        parser={value => value.replace('%', '')}
      />
    </>
  )
}

export const InputNumberExampleFormater = TemplateExampleFormater.bind({});
