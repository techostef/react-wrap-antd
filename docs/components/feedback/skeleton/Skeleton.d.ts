import React from 'react';
import { Skeleton as SkeletonComp, SkeletonProps } from 'antd';
interface ISkeleton extends SkeletonProps {
}
declare const Skeleton: React.FC<ISkeleton> & {
    Avatar: typeof SkeletonComp.Avatar;
    Input: typeof SkeletonComp.Input;
    Button: typeof SkeletonComp.Button;
    Image: typeof SkeletonComp.Image;
};
export default Skeleton;
