import React from 'react';
import { List as ListComp, ListProps } from 'antd';

export enum ListItemLayout {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export enum ListItemSize {
  default = 'default',
  large = 'large',
  small = 'small',
}

interface IList extends ListProps<any>{}

const List: React.FC<IList> & {
  Item: typeof ListComp.Item,
} = (props) => {
  return (
   <ListComp {...props}/>
  );
};

List.Item = ListComp.Item

export default List;

