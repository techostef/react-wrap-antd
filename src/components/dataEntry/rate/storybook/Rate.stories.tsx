/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

import Rate from '../Rate';

export default {
  title: 'DataEntry/Rate',
  component: Rate,
  argTypes: {
    allowClear: argTypesEnum.BOOL_TRUE,
    allowHalf: argTypesEnum.BOOL_FALSE,
    autoFocus: argTypesEnum.BOOL_FALSE,
    character: null,
    className: argTypesEnum.STRING,
    count: argTypesEnum.NUMBER,
    defaultValue: argTypesEnum.NUMBER,
    disabled: argTypesEnum.BOOL_FALSE,
    style: argTypesEnum.OBJECT,
    tooltips: argTypesEnum.ARRAY,
    value: argTypesEnum.NUMBER,
    onBlur: argTypesEnum.EVENTS,
    onChange: argTypesEnum.EVENTS,
    onFocus: argTypesEnum.EVENTS,
    onHoverChange: argTypesEnum.EVENTS,
    onKeyDown: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Rate
    {...args}
  />
);

export const RateDefault = Template.bind({});
RateDefault.args = {
  children: 'Text',
};

const TemplateExampleHalfStar = () => {
  return (
    <Rate allowHalf defaultValue={2.5} />
  )
}

export const RateExampleHalfStar = TemplateExampleHalfStar.bind({});

const TemplateExampleShowCopyWriting = () => {
  const [value, setValue] = useState(3)

  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  const handleChange = val => {
    setValue(val);
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
}

export const RateExampleShowCopyWriting = TemplateExampleShowCopyWriting.bind({});

const TemplateExampleCustomizeCharacter = () => {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  return (
    <>
      <Rate defaultValue={2} character={({ index }) => index + 1} />
      <br />
      <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
    </>
  )
}

export const RateExampleCustomizeCharacter = TemplateExampleCustomizeCharacter.bind({});
