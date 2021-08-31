import React from 'react';
import { AlertProps } from 'antd';
export declare enum AlertType {
    success = "success",
    info = "info",
    warning = "warning",
    error = "error"
}
interface IAlert extends AlertProps {
}
declare const Alert: React.FC<IAlert>;
export default Alert;
