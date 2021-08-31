import React from 'react';
import { Select as SelectComp, SelectProps } from 'antd';

interface ISelect extends SelectProps<any> {
}

const Select: React.FC<ISelect> & {
  Option: typeof SelectComp.Option,
  OptGroup: typeof SelectComp.OptGroup,
} = ({children, ...props}) => {
  return (
    <SelectComp
      {...props}
    >
      { children }
    </SelectComp>
  );
};

Select.Option = SelectComp.Option;
Select.OptGroup = SelectComp.OptGroup;

export default Select;
