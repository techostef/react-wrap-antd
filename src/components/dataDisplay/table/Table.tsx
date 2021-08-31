import React from 'react';
import { Table as TableComp, TableProps } from 'antd';

interface ITable extends TableProps<any> {
}

const Table: React.FC<ITable> & {
  Column: typeof TableComp.Column,
  ColumnGroup: typeof TableComp.ColumnGroup,
  Summary: typeof TableComp.Summary,
  SELECTION_ALL: typeof TableComp.SELECTION_ALL,
  SELECTION_INVERT: typeof TableComp.SELECTION_INVERT,
  SELECTION_NONE: typeof TableComp.SELECTION_NONE,
} = ({children, ...props}) => {

  return (
    <TableComp
      {...props}
    >
      { children }
    </TableComp>
  );
};

Table.Column = TableComp.Column;
Table.ColumnGroup = TableComp.ColumnGroup;
Table.Summary = TableComp.Summary;
Table.SELECTION_ALL = TableComp.SELECTION_ALL;
Table.SELECTION_INVERT = TableComp.SELECTION_INVERT;
Table.SELECTION_NONE = TableComp.SELECTION_NONE;

export default React.memo(Table);
