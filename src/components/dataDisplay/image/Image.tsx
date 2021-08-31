import React from 'react';
import { Image as ImageComp, ImageProps } from 'antd';

interface IImage extends ImageProps{}

const Image: React.FC<IImage> & {
  PreviewGroup: typeof ImageComp.PreviewGroup
}= (props) => {

  return (
    <ImageComp {...props} />
  );
};

Image.PreviewGroup = ImageComp.PreviewGroup

export default Image;

