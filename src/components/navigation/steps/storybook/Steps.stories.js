/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Steps, { StepsDirection, StepsLabelPlacement, StepsSize, StepsStatus, StepsType } from '../Steps';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { Divider } from 'antd';

export default {
  title: 'Navigation/Steps',
  component: Steps,
  argTypes: {
    className: argTypesEnum.STRING,
    current: argTypesEnum.NUMBER,
    dataTestId: argTypesEnum.STRING,
    direction: argTypesEnum.STRING,
    initial: argTypesEnum.NUMBER
  },
};

const TemplateBasic = () => {
  return (
    <Steps current={1}>
      <Steps.Step title="Finished" description="This is a description." />
      <Steps.Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
      <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
  )
};

const TemplateMiniVersion = () => {
  return (
    <Steps size={StepsSize.small} current={1}>
      <Steps.Step title="Finished"/>
      <Steps.Step title="In Progress"/>
      <Steps.Step title="Waiting"/>
    </Steps>
  )
}

const TemplateWithIcon = () => {
  return (
    <Steps>
      <Steps.Step status={StepsStatus.finish} title="Login" icon={<UserOutlined />} />
      <Steps.Step status={StepsStatus.finish} title="Verification" icon={<SolutionOutlined />} />
      <Steps.Step status={StepsStatus.process} title="Pay" icon={<LoadingOutlined />} />
      <Steps.Step status={StepsStatus.wait} title="Done" icon={<SmileOutlined />} />
    </Steps>
  )
}

const TemplateVertical = () => {
  return (
    <Steps direction={StepsDirection.vertical} current={1}>
      <Steps.Step title="Finished" description="This is a description." />
      <Steps.Step title="In Progress" description="This is a description." />
      <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
  )
}

const TemplateWithError = () => {
  return (
    <Steps current={1} status={StepsStatus.error}>
      <Steps.Step title="Finished" description="This is a description" />
      <Steps.Step title="In Process" description="This is a description" />
      <Steps.Step title="Waiting" description="This is a description" />
    </Steps>
  )
}

const TemplateWithDotStyle = () => {
  return (
    <>
      <Steps progressDot current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="In Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
      <Divider />
      <Steps progressDot current={1} direction={StepsDirection.vertical}>
        <Steps.Step title="Finished" description="This is a description. This is a description." />
        <Steps.Step title="Finished" description="This is a description. This is a description." />
        <Steps.Step title="In Progress" description="This is a description. This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
    </>
  )
}

const TemplateStepsWithOnChange = () => {
  const [current, setCurrent] = useState(0);
  
  const handleOnChange = (currentChange) => {
    console.log('onChange:', currentChange);
    setCurrent(currentChange);
  }
  
  return (
    <>
      <Steps current={current} onChange={handleOnChange}>
        <Steps.Step title="Step 1" description="This is a description." />
        <Steps.Step title="Step 2" description="This is a description." />
        <Steps.Step title="Step 3" description="This is a description." />
      </Steps>

      <Divider />

      <Steps current={current} onChange={handleOnChange} direction={StepsDirection.vertical}>
        <Steps.Step title="Step 1" description="This is a description." />
        <Steps.Step title="Step 2" description="This is a description." />
        <Steps.Step title="Step 3" description="This is a description." />
      </Steps>
    </>
  );
}

const TemplateWithNavigationArrow = () => (
  <Steps
    type={StepsType.navigation}
    size={StepsSize.small}
    current={0}
    onChange={() => {}}
    className="site-navigation-steps"
  >
    <Steps.Step
      title="Step 1"
      subTitle="00:00:05"
      status={StepsStatus.finish}
      description="This is a description."
    />
    <Steps.Step
      title="Step 2"
      subTitle="00:01:02"
      status={StepsStatus.process}
      description="This is a description."
    />
    <Steps.Step
      title="Step 3"
      subTitle="waiting for longlong time"
      status={StepsStatus.wait}
      description="This is a description."
    />
  </Steps>
)

const TemplateWithProgress = () => (
  <Steps current={1} percent={60}>
    <Steps.Step title="Finished" description="This is a description." />
    <Steps.Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Steps.Step title="Waiting" description="This is a description." />
  </Steps>
)

export const StepsBasic = TemplateBasic.bind({});
export const StepsMiniVersion = TemplateMiniVersion.bind({});
export const StepsTemplateWithIcon = TemplateWithIcon.bind({});
export const StepsVertical = TemplateVertical.bind({});
export const StepsWithError = TemplateWithError.bind({});
export const StepsWithDotStyle = TemplateWithDotStyle.bind({});
export const StepsWithOnChange = TemplateStepsWithOnChange.bind({});
export const StepsWithProgress = TemplateWithProgress.bind({});
export const StepsWithNavigationArrow = TemplateWithNavigationArrow.bind({});