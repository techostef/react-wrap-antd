import React from 'react';
import { Alert as AlertComp, AlertProps } from 'antd';

export enum AlertType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

interface IAlert extends AlertProps {};

const Alert: React.FC<IAlert> = (props) => {
  return (
    <AlertComp {...props} />
  )
}

export default Alert;
