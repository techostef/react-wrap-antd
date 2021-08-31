import React from 'react';
import { PopconfirmProps } from 'antd';
export declare enum PopconfirmPlacement {
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
export declare enum PopconfirmTrigger {
    click = "click",
    hover = "hover",
    focus = "focus"
}
export declare enum PopconfirmButtonType {
    primary = "primary"
}
interface IPopconfirm extends PopconfirmProps {
}
declare const Popconfirm: React.FC<IPopconfirm>;
export default Popconfirm;
