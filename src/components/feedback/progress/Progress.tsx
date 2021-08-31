import React from 'react';
import { Progress as ProgressComp, ProgressProps } from 'antd';

export enum ProgressStatus {
  active = 'active',
  exception = 'exception',
  normal = 'normal',
  success = 'success',
} 

export enum ProgressStrokeLineCap {
  round = 'round',
  square = 'square',
}

export enum ProgressType {
  line = 'line',
  circle = 'circle',
  dashboard = 'dashboard',
}

export enum ProgressSize {
  small = 'small',
  middle = 'middle',
}

interface IProgress extends ProgressProps {}

const Progress: React.FC<IProgress> = (props) => {
  return (
    <ProgressComp {...props} />
  );
}

export default Progress;

