import React from 'react';
import { DividerProps } from 'antd';
export declare enum DividerOrientation {
    left = "left",
    right = "right",
    center = "center"
}
export declare enum DividerType {
    horizontal = "horizontal",
    vertical = "vertical"
}
interface IDivider extends DividerProps {
}
declare const _default: React.NamedExoticComponent<IDivider>;
export default _default;
