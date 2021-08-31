import React from 'react';
import { Select as SelectComp, SelectProps } from 'antd';
interface ISelect extends SelectProps<any> {
}
declare const Select: React.FC<ISelect> & {
    Option: typeof SelectComp.Option;
    OptGroup: typeof SelectComp.OptGroup;
};
export default Select;
