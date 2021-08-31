import React from 'react';
import { PopoverProps } from 'antd';
export declare enum PopoverTrigger {
    click = "click",
    focus = "focus",
    hover = "hover"
}
export declare enum PopoverPlacement {
    topLeft = "topLeft",
    top = "top",
    topRight = "topRight",
    leftTop = "leftTop",
    left = "left",
    leftBottom = "leftBottom",
    rightTop = "rightTop",
    right = "right",
    rightBottom = "rightBottom",
    bottomLeft = "bottomLeft",
    bottom = "bottom",
    bottomRight = "bottomRight"
}
interface IPopover extends PopoverProps {
}
declare const _default: React.NamedExoticComponent<IPopover>;
export default _default;
