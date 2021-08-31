import React from 'react';
import { List as ListComp, ListProps } from 'antd';
export declare enum ListItemLayout {
    horizontal = "horizontal",
    vertical = "vertical"
}
export declare enum ListItemSize {
    default = "default",
    large = "large",
    small = "small"
}
interface IList extends ListProps<any> {
}
declare const List: React.FC<IList> & {
    Item: typeof ListComp.Item;
};
export default List;
