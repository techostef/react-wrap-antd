/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { Divider } from 'antd';

import Checkbox from '../Checkbox';

export default {
  title: 'DataEntry/Checkbox/Checkbox',
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
  <Checkbox
    {...args}
  />
);

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  children: 'Text',
};

const TemplateExampleCode = () => {

  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];

  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
}

export const CheckboxExampleCode = TemplateExampleCode.bind();
CheckboxExampleCode.args = {
};
