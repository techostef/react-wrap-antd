import React from 'react';
import { Checkbox as CheckboxComp, CheckboxProps } from 'antd';

interface ICheckbox extends CheckboxProps {
}

const Checkbox: React.FC<ICheckbox> & {
  Group: typeof CheckboxComp.Group,
} = ({children, ...props}) => {

  return (
    <CheckboxComp
      {...props}
    >
      { children }
    </CheckboxComp>
  );
};

Checkbox.Group = CheckboxComp.Group;

export default Checkbox;
