import React from 'react';
import { RowProps } from 'antd';
export declare enum RowAlign {
    top = "top",
    middle = "middle",
    bottom = "bottom"
}
export declare enum RowJustify {
    start = "start",
    end = "end",
    center = "center",
    spaceAround = "space-around",
    spaceBetween = "space-between"
}
interface IRow extends RowProps {
}
declare const Row: React.FC<IRow>;
export default Row;
