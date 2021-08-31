import React from 'react';
import { Badge as BadgeComp, BadgeProps } from 'antd';

export enum BadgeSize {
  default = 'default',
  small = 'small,'
}

export enum BadgeStatus {
  default = 'default',
  error = 'error',
  processing = 'processing',
  success = 'success',
  warning = 'warning',
}

interface IBadge extends BadgeProps{}

const Badge: React.FC<IBadge> & {
  Ribbon: typeof BadgeComp.Ribbon,
}= (props) => {
  return (
   <BadgeComp {...props}/>
  );
};

Badge.Ribbon = BadgeComp.Ribbon

export default Badge;

