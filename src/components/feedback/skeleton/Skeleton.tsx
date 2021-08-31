import React from 'react';
import { Skeleton as SkeletonComp, SkeletonProps  } from 'antd';

interface ISkeleton extends SkeletonProps {};

const Skeleton: React.FC<ISkeleton> & {
  Avatar: typeof SkeletonComp.Avatar,
  Input: typeof SkeletonComp.Input,
  Button: typeof SkeletonComp.Button,
  Image: typeof SkeletonComp.Image,
} = (props) => {
  return (
    <SkeletonComp {...props} />
  )
}

Skeleton.Avatar = SkeletonComp.Avatar; 
Skeleton.Input = SkeletonComp.Input; 
Skeleton.Button = SkeletonComp.Button;
Skeleton.Image = SkeletonComp.Image;

export default Skeleton;