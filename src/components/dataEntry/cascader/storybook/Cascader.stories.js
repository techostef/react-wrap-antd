/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { SizeEnum } from '../../../../enums/dataEnum';

import Cascader, { 
  CascaderExpandTrigger,
  CascaderPopupPlacement, 
} from '../Cascader';

export default {
  title: 'DataEntry/Cascader',
  component: Cascader,
  argTypes: {
    allowClear: argTypesEnum.BOOL_TRUE,
    autoFocus: argTypesEnum.BOOL_FALSE,
    bordered: argTypesEnum.BOOL_TRUE,
    changeOnSelect: argTypesEnum.BOOL_FALSE,
    className: argTypesEnum.STRING,
    defaultValue: argTypesEnum.ARRAY,
    disabled: argTypesEnum.BOOL_FALSE,
    displayRender: null,
    dropdownRender: null,
    expandIcon: null,
    expandTrigger: argTypesEnum.RADIO({
      defaultValue: CascaderExpandTrigger.click,
      options: CascaderExpandTrigger
    }),
    fieldNames: argTypesEnum.OBJECT,
    getPopupContainer: null,
    loadData: null,
    notFoundContent: argTypesEnum.STRING,
    options: argTypesEnum.ARRAY,
    placeholder: argTypesEnum.STRING,
    popupClassName: argTypesEnum.STRING,
    popupPlacement: argTypesEnum.RADIO({
      defaultValue: CascaderPopupPlacement.bottomLeft,
      options: CascaderPopupPlacement,
    }),
    popupVisible: argTypesEnum.BOOL_FALSE,
    showSearch: argTypesEnum.BOOL_FALSE,
    size: argTypesEnum.RADIO({
      defaultValue: SizeEnum.middle,
      options: SizeEnum
    }),
    style: argTypesEnum.OBJECT,
    suffixIcon: null,
    value: argTypesEnum.ARRAY,
    onChange: argTypesEnum.EVENTS,
    onPopupVisibleChange: argTypesEnum.EVENTS,
  },
};

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const Template = (args) => (
  <Cascader {...args}/>
)

const TemplateExampleCode = () => {
  
  function onChange(value) {
    console.log(value);
  }
  
  return (
    <Cascader options={options} onChange={onChange} placeholder="Please select" />
  )
}

export const CascaderBasic = Template.bind({});
CascaderBasic.args = {
  children: 'Text',
  expandTrigger: 'click',
  options: options,
  placeholder: 'Please Select Item',
};

export const CascaderExampleCode = TemplateExampleCode.bind({});
CascaderExampleCode.args = {
  children: 'Text',
  options: [],
};
