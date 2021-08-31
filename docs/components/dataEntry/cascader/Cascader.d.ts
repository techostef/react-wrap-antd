import React from 'react';
import { CascaderProps } from 'antd';
export declare enum CascaderExpandTrigger {
    click = "click",
    hover = "hover"
}
export declare enum CascaderPopupPlacement {
    bottomLeft = "bottomLeft",
    bottomRight = "bottomRight",
    topLeft = "topLeft",
    topRight = "topRight"
}
interface ICascader extends CascaderProps {
}
declare const _default: React.NamedExoticComponent<ICascader>;
export default _default;
