import React from 'react';
import { Descriptions as DescriptionsComp, DescriptionsProps } from 'antd';
export declare enum DescriptionsLayout {
    horizontal = "horizontal",
    vertical = "vertical"
}
export declare enum DescriptionsSize {
    default = "default",
    middle = "middle",
    small = "small"
}
interface IDescriptions extends DescriptionsProps {
}
declare const Descriptions: React.FC<IDescriptions> & {
    Item: typeof DescriptionsComp.Item;
};
export default Descriptions;
