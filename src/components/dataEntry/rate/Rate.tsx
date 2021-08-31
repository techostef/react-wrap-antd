import React from 'react';
import { Rate as RateComp, RateProps } from 'antd';

interface IRate extends RateProps {
}

const Rate: React.FC<IRate> = ({children, ...props}) => {

  return (
    <RateComp
      {...props}
    >
      { children }
    </RateComp>
  );
};

export default React.memo(Rate);
