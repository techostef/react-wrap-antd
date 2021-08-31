/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Radio } from 'antd'

import Timeline from '../Timeline';

export default {
  title: 'DataDisplay/Timeline',
  component: Timeline,
  argTypes: {
    mode: argTypesEnum.STRING,
    pending: null,
    pendingDot: null,
    dataTestId: argTypesEnum.STRING,
    reverse: argTypesEnum.BOOL_FALSE,
  },
};

const Template = (args) => (
  <Timeline {...args}>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
);

export const TimelineDefault = Template.bind({});
TimelineDefault.args = {
};

const TemplateExampleColor = () => {
  return (
    <Timeline>
      <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
    </Timeline>
  )
}

export const TreeExampleColor = TemplateExampleColor.bind({});

const TemplateExampleCustom = () => {
  // import { ClockCircleOutlined } from '@ant-design/icons';

  return (
    <Timeline>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
        Technical testing 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  )
}

export const TreeExampleCustom = TemplateExampleCustom.bind({});

const TemplateExampleAlign = () => {
  const [mode, setMode] = useState('left');

  const onChange = e => {
    setMode(e.target.value);
  };

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline mode={mode as any}>
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    </>
  );
}

export const TreeExampleAlign = TemplateExampleAlign.bind({});