/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Tooltip } from 'antd';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Progress, { ProgressStrokeLineCap, ProgressType, ProgressStatus, ProgressSize } from '../Progress';

export default {
  title: 'Feedback/Progress',
  component: Progress,
  argTypes: {
    format: argTypesEnum.EVENTS,
    percent: argTypesEnum.STRING,
    showInfo: argTypesEnum.BOOL_TRUE,
    status: argTypesEnum.RADIO({
      defaultValue: ProgressStatus.normal,
      options: ProgressStatus,
    }),
    size: argTypesEnum.RADIO({
      defaultValue: ProgressSize.middle,
      options: ProgressSize,
    }),
    steps: argTypesEnum.NUMBER,
    strokeColor: argTypesEnum.STRING,
    strokeLinecap: argTypesEnum.RADIO({
      defaultValue: ProgressStrokeLineCap.round,
      defaultValue: ProgressStrokeLineCap,
    }),
    success: argTypesEnum.OBJECT,
    trailColor: argTypesEnum.STRING,
    type: argTypesEnum.RADIO({
      defaultValue: ProgressType.line,
      options: ProgressType,
    })
  },
};

const TemplateProgressLine = (args) => {
  return (
    <Progress {...args} />
  )
}

const TemplateProgressCircle = (args) => {
  return (
    <Progress {...args} />
  )
}

const TemplateProgressDashboard = (args) => {
  return (
    <Progress {...args} />
  )
}

const TemplateProgressBarWithStep = (args) => {
  return (
    <Progress {...args} type="line" />
  )
}

const TemplateProgressBarWithCustomFormat = (args) => {
  return (
    <>
      <Progress {...args} type="circle" format={percent => `${percent} Days`} />
      <Progress {...args} type="circle" format={() => 'Done'} />
    </>
  )
}

const TemplateProgressBarWithSuccessSegment = (args) => {
  return (
    <>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress {...args} />
      </Tooltip>

      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress {...args} type="circle" />
      </Tooltip>

      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress {...args} type="dashboard" />
      </Tooltip>
    </>
  )
}

const TemplateProgressCustomLineGradient = (args) => {
  return (
    <>
      <Progress
        {...args}
        type="line"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
      <Progress
        {...args}
        type="line"
        strokeColor={{
          from: '#108ee9',
          to: '#87d068',
        }}
        status="active"
      />
      <Progress
        {...args}
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
      <Progress
        {...args}
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
    </>
  )
}

export const ProgressLine = TemplateProgressLine.bind({});
ProgressLine.args = {
  percent: 50,
  type: ProgressType.line,
  status: ProgressStatus.normal
}

export const ProgressCircle = TemplateProgressCircle.bind({});
ProgressCircle.args = {
  percent: 50,
  type: ProgressType.circle,
  status: ProgressStatus.normal
}

export const ProgressDashboard = TemplateProgressDashboard.bind({});
ProgressDashboard.args = {
  percent: 50,
  type: ProgressType.dashboard,
  status: ProgressStatus.normal
}

export const ProgressBarWithStep = TemplateProgressBarWithStep.bind({});
ProgressBarWithStep.args = {
  percent: 60,
  type: ProgressType.line,
  steps: 10,
}

export const ProgressBarWithSuccessSegment = TemplateProgressBarWithSuccessSegment.bind({});
ProgressBarWithSuccessSegment.args = {
  percent: 60,
  success: { percent: 30 }
}

export const ProgressBarWithCustomFormat = TemplateProgressBarWithCustomFormat.bind({});
ProgressBarWithCustomFormat.args = {
  percent: 70,
}

export const ProgressCustomLineGradient = TemplateProgressCustomLineGradient.bind({});
ProgressCustomLineGradient.args = {
  percent: 80,
  type: ProgressType.dashboard,
  status: ProgressStatus.normal
}
