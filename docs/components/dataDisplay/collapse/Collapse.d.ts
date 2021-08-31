import React from 'react';
import { Collapse as CollapseComp, CollapseProps } from 'antd';
export declare enum CollapseExpandIConPosition {
    left = "left",
    right = "right"
}
export declare enum CollapseCollapsible {
    disabled = "disabled",
    header = "header,"
}
interface ICollapse extends CollapseProps {
}
declare const Collapse: React.FC<ICollapse> & {
    Panel: typeof CollapseComp.Panel;
};
export default Collapse;
