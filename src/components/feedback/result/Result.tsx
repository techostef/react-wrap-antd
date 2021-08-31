import React from 'react';
import { Result as ResultComp, ResultProps } from 'antd';

export enum ResultStatus {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
  http404 = '404',
  http403 = '403',
  http500 = '500',
}

interface IResult extends ResultProps {};

const Result: React.FC<IResult> = (props) => {
  return (
    <ResultComp {...props} />
  )
}

export default Result;
