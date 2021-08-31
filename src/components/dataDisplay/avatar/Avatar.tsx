import React from 'react';
import { Avatar as AvatarComp, AvatarProps } from 'antd';

export enum AvatarShapes {
  circle = 'circle',
  square = 'square',
}

interface IAvatar extends AvatarProps{}

const Avatar: React.FC<IAvatar> & {
  Group: typeof AvatarComp.Group
}= (props) => {
  return (
    <AvatarComp {...props}/>
  );
};

Avatar.Group = AvatarComp.Group

export default Avatar;

