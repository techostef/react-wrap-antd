import React from 'react';
import { Dropdown as DropdownComp, DropDownProps } from 'antd';

export enum DropdownPlacement {
  bottomLeft = 'bottomLeft',
  bottomCenter = 'bottomCenter',
  bottomRight = 'bottomRight',
  topLeft = 'topLeft',
  topCenter = 'topCenter',
  topRight = 'topRight',
}

interface IDropdown extends DropDownProps{}

const Dropdown: React.FC<IDropdown> & {
  Button: typeof DropdownComp.Button,
} = (props) => {
  return (
   <DropdownComp {...props}/>
  );
};

Dropdown.Button = DropdownComp.Button;

export default Dropdown;

