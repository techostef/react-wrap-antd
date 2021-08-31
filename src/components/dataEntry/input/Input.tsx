import React from 'react';
import { Input as InputComp, InputProps } from 'antd';

interface IInput extends InputProps {
}

const Input: React.FC<IInput> & {
  Group: typeof InputComp.Group;
  Password: typeof InputComp.Password;
  Search: typeof InputComp.Search;
  TextArea: typeof InputComp.TextArea;
} = ({children, ...props}) => {

  return (
    <InputComp
      {...props}
    />
  );
};

Input.Group = InputComp.Group;
Input.Password = InputComp.Password;
Input.Search = InputComp.Search;
Input.TextArea = InputComp.TextArea;

export default Input;
