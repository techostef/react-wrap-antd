import React from 'react';
import { Image as ImageComp, ImageProps } from 'antd';
interface IImage extends ImageProps {
}
declare const Image: React.FC<IImage> & {
    PreviewGroup: typeof ImageComp.PreviewGroup;
};
export default Image;
