import React from 'react';
import { Steps as StepsComp, StepsProps } from 'antd';
export declare enum StepsDirection {
    horizontal = "horizontal",
    vertical = "vertical"
}
export declare enum StepsLabelPlacement {
    horizontal = "horizontal",
    vertical = "vertical"
}
export declare enum StepsSize {
    default = "default",
    small = "small"
}
export declare enum StepsStatus {
    error = "error",
    finish = "finish",
    process = "process",
    wait = "wait"
}
export declare enum StepsType {
    default = "default",
    navigation = "navigation"
}
interface ISteps extends StepsProps {
}
declare const Steps: React.FC<ISteps> & {
    Step: typeof StepsComp.Step;
};
export default Steps;
