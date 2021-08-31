import React from 'react';
import { ResultProps } from 'antd';
export declare enum ResultStatus {
    success = "success",
    error = "error",
    info = "info",
    warning = "warning",
    http404 = "404",
    http403 = "403",
    http500 = "500"
}
interface IResult extends ResultProps {
}
declare const Result: React.FC<IResult>;
export default Result;
