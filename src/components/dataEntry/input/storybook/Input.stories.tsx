/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { InfoCircleOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Select, Space, Tooltip } from 'antd';
import Cascader from '../../cascader/Cascader';

import Input from '../Input';
import { SizeEnum } from '../../../../enums/dataEnum';

export default {
  title: 'DataEntry/Input/Input',
  component: Input,
  argTypes: {
    addonAfter: null,
    addonBefore: null,
    allowClear: argTypesEnum.BOOL_FALSE,
    bordered: argTypesEnum.BOOL_TRUE,
    defaultValue: argTypesEnum.STRING,
    disabled: argTypesEnum.BOOL_FALSE,
    id: argTypesEnum.STRING,
    maxLength: argTypesEnum.NUMBER,
    prefix: null,
    size: argTypesEnum.RADIO({
      defaultValue: SizeEnum.middle,
      options: SizeEnum,
    }),
    suffix: null,
    type: argTypesEnum.STRING,
    value: argTypesEnum.STRING,
    onChange: argTypesEnum.EVENTS,
    onPressEnter: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Input
    {...args}
  />
);

export const InputDefault = Template.bind({});
InputDefault.args = {
  children: 'Text',
};

const TemplateTextArea = (args) => (
  <Input.TextArea {...args}/>
);

export const InputTextArea = TemplateTextArea.bind({});

const TemplateExamplePrePost = () => {

  const { Option } = Select;

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  return (
    <Space direction="vertical">
      <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
      <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
      <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
      <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
      <Input
        addonBefore={<Cascader options={[]} placeholder="cascader" style={{ width: 150 }} />}
        defaultValue="mysite"
      />
    </Space>
  )
}

export const InputDefaultExamplePrePost = TemplateExamplePrePost.bind({});

const TemplateTooltip = () => {
  const formatNumber = (value: string) => {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
  }

  const [value, setValue] = useState('');

  const onChange = (e: any) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setValue(value);
    }
  };

  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
  ) : (
    'Input a number'
  );
  return (
    <Tooltip
      trigger={['focus']}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        onChange={onChange}
        placeholder="Input a number"
        maxLength={25}
      />
    </Tooltip>
  );
}

export const InputDefaultTooltip = TemplateTooltip.bind({});

const TemplateExampleClear = () => (
  <>
    <Input placeholder="input with clear icon" allowClear onChange={() => {}} />
    <br />
    <br />
    <Input.TextArea placeholder="textarea with clear icon" allowClear onChange={() => {}} />
  </>
);

export const InputExampleClear = TemplateExampleClear.bind({});

const TemplateExamplePrefixSufix = () => (
  <>
    <Input
      placeholder="Enter your username"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" disabled />
  </>
);

export const InputExamplePrefixSufix = TemplateExamplePrefixSufix.bind({});

