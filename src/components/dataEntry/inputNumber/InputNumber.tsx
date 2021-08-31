import React from 'react';
import { InputNumber as InputNumberComp, InputNumberProps } from 'antd';

interface IInputNumber extends InputNumberProps {
}

const InputNumber: React.FC<IInputNumber> = ({children, ...props}) => {

  return (
    <InputNumberComp
      {...props}
    />
  );
};

export default React.memo(InputNumber);
