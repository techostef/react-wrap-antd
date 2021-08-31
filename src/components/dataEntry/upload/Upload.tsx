import React from 'react';
import { Upload as UploadComp, UploadProps } from 'antd';

interface IUpload extends UploadProps {
}

const Upload: React.FC<IUpload> & {
  Dragger: typeof UploadComp.Dragger;
}= ({children, ...props}) => {

  return (
    <UploadComp
      {...props}
    >
      { children }
    </UploadComp>
  );
};

Upload.Dragger = UploadComp.Dragger;

export default Upload;
