import React from 'react';
import { Transfer as TransferComp, TransferProps } from 'antd';

interface ITransfer extends TransferProps<any> {
}

const Transfer: React.FC<ITransfer> = ({children, ...props}) => {

  return (
    <TransferComp
      {...props}
    />
  );
};

export default Transfer;
