import React from 'react';
import { Switch as SwitchComp, SwitchProps } from 'antd';

interface ISwitch extends SwitchProps {
}

const Switch: React.FC<ISwitch> = ({children, ...props}) => {

  return (
    <SwitchComp
      {...props}
    />
  );
};

export default React.memo(Switch);
