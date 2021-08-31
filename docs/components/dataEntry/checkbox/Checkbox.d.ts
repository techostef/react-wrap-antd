import React from 'react';
import { Checkbox as CheckboxComp, CheckboxProps } from 'antd';
interface ICheckbox extends CheckboxProps {
}
declare const Checkbox: React.FC<ICheckbox> & {
    Group: typeof CheckboxComp.Group;
};
export default Checkbox;
