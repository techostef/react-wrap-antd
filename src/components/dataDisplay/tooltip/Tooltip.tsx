import React from 'react';
import { Tooltip as TooltipComp, TooltipProps } from 'antd';

const Tooltip: React.FC<TooltipProps> = ({children, ...props}) => {
  return (
    <TooltipComp
      {...props}
    >
      { children }
    </TooltipComp>
  );
};

export default React.memo(Tooltip);
