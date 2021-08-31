import React from 'react';
import { Upload as UploadComp, UploadProps } from 'antd';
interface IUpload extends UploadProps {
}
declare const Upload: React.FC<IUpload> & {
    Dragger: typeof UploadComp.Dragger;
};
export default Upload;
