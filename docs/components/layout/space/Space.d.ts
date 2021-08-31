import React from 'react';
import { SpaceProps } from 'antd';
export declare enum SpaceAlign {
    start = "start",
    end = "end",
    center = "center",
    baseline = "baseline"
}
export declare enum SpaceDirection {
    vertical = "vertical",
    horizontal = "horizontal"
}
export declare enum SpaceSize {
    small = "small",
    middle = "middle",
    large = "large"
}
interface ISpaceComp extends SpaceProps {
}
declare const _default: React.NamedExoticComponent<ISpaceComp>;
export default _default;
