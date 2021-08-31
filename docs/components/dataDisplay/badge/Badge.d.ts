import React from 'react';
import { Badge as BadgeComp, BadgeProps } from 'antd';
export declare enum BadgeSize {
    default = "default",
    small = "small,"
}
export declare enum BadgeStatus {
    default = "default",
    error = "error",
    processing = "processing",
    success = "success",
    warning = "warning"
}
interface IBadge extends BadgeProps {
}
declare const Badge: React.FC<IBadge> & {
    Ribbon: typeof BadgeComp.Ribbon;
};
export default Badge;
