import React from 'react';
import { Steps as StepsComp, StepsProps } from 'antd';

export enum StepsDirection {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export enum StepsLabelPlacement {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export enum StepsSize {
  default = 'default',
  small = 'small',
}

export enum StepsStatus {
  error = 'error',
  finish = 'finish',
  process = 'process',
  wait = 'wait',
}

export enum StepsType {
  default = 'default',
  navigation = 'navigation',
}

interface ISteps extends StepsProps{}

const Steps: React.FC<ISteps> & {
  Step: typeof StepsComp.Step
}= (props) => {

  return (
    <StepsComp {...props}>
    </StepsComp>
  );
};

Steps.Step = StepsComp.Step;

export default Steps;
