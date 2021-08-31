import React from 'react';
import { Dropdown as DropdownComp, DropDownProps } from 'antd';
export declare enum DropdownPlacement {
    bottomLeft = "bottomLeft",
    bottomCenter = "bottomCenter",
    bottomRight = "bottomRight",
    topLeft = "topLeft",
    topCenter = "topCenter",
    topRight = "topRight"
}
interface IDropdown extends DropDownProps {
}
declare const Dropdown: React.FC<IDropdown> & {
    Button: typeof DropdownComp.Button;
};
export default Dropdown;
