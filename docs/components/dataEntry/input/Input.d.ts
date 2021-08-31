import React from 'react';
import { Input as InputComp, InputProps } from 'antd';
interface IInput extends InputProps {
}
declare const Input: React.FC<IInput> & {
    Group: typeof InputComp.Group;
    Password: typeof InputComp.Password;
    Search: typeof InputComp.Search;
    TextArea: typeof InputComp.TextArea;
};
export default Input;
