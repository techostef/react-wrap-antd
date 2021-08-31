import React from 'react';
import { Radio as RadioComp, RadioProps } from 'antd';

interface IRadio extends RadioProps {
}

const Radio: React.FC<IRadio> & {
  Button: typeof RadioComp.Button,
  Group: typeof RadioComp.Group,
} = ({children, ...props}) => {

  return (
    <RadioComp
      {...props}
    >
      { children }
    </RadioComp>
  );
};

Radio.Button = RadioComp.Button;
Radio.Group = RadioComp.Group;

export default Radio;
