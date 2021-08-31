import React from 'react';
import { ProgressProps } from 'antd';
export declare enum ProgressStatus {
    active = "active",
    exception = "exception",
    normal = "normal",
    success = "success"
}
export declare enum ProgressStrokeLineCap {
    round = "round",
    square = "square"
}
export declare enum ProgressType {
    line = "line",
    circle = "circle",
    dashboard = "dashboard"
}
export declare enum ProgressSize {
    small = "small",
    middle = "middle"
}
interface IProgress extends ProgressProps {
}
declare const Progress: React.FC<IProgress>;
export default Progress;
