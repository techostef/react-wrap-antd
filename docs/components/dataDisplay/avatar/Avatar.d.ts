import React from 'react';
import { Avatar as AvatarComp, AvatarProps } from 'antd';
export declare enum AvatarShapes {
    circle = "circle",
    square = "square"
}
interface IAvatar extends AvatarProps {
}
declare const Avatar: React.FC<IAvatar> & {
    Group: typeof AvatarComp.Group;
};
export default Avatar;
