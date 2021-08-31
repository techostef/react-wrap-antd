/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { UploadOutlined, LoadingOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import { message, Button } from 'antd';
import Upload from '../Upload';
import reqwest from 'reqwest';

export default {
  title: 'DataEntry/Upload',
  component: Upload,
  argTypes: {
    accept: argTypesEnum.STRING,
    action: null,
    beforeUpload: null,
    customRequest: argTypesEnum.EVENTS,
    data: null,
    defaultFileList: argTypesEnum.ARRAY,
    directory: argTypesEnum.BOOL_FALSE,
    disabled: argTypesEnum.BOOL_FALSE,
    fileList: argTypesEnum.ARRAY,
    headers: argTypesEnum.OBJECT,
    iconRender: argTypesEnum.EVENTS,
    isImageUrl: argTypesEnum.EVENTS,
    itemRender: null,
    listType: argTypesEnum.STRING,
    maxCount: argTypesEnum.NUMBER,
    method: argTypesEnum.STRING,
    multiple: argTypesEnum.BOOL_FALSE,
    name: argTypesEnum.STRING,
    openFileDialogOnClick: argTypesEnum.BOOL_FALSE,
    previewFile: argTypesEnum.EVENTS,
    progress: null,
    showUploadList: null,
    withCredentials: argTypesEnum.BOOL_FALSE,
    onChange: argTypesEnum.EVENTS,
    onDrop: argTypesEnum.EVENTS,
    onDownload: argTypesEnum.EVENTS,
    onPreview: argTypesEnum.EVENTS,
    onRemove: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Upload
    {...args}
  />
);

export const UploadDefault = Template.bind({});
UploadDefault.args = {
  children: 'Text',
};

const TemplateExampleByClick = () => {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  )
}

export const UploadExampleByClick = TemplateExampleByClick.bind({});

const TemplateExampleAvatar = () => {
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  );
}

export const UploadExampleAvatar = TemplateExampleAvatar.bind({});

const TemplateExampleDefaultFiles = () => {
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done' as any,
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error' as any,
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  };
  
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  )
}

export const UploadExampleDefaultFiles = TemplateExampleDefaultFiles.bind({});

const TemplateExampleUploadDirectory = () => {
  return (
    <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
      <Button icon={<UploadOutlined />}>Upload Directory</Button>
    </Upload>
  )
}

export const UploadExampleUploadDirectory = TemplateExampleUploadDirectory.bind({});

const TemplateExampleDragDrop = () => {
  const { Dragger } = Upload;

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </Dragger>
  )

}

export const UploadExampleDragDrop = TemplateExampleDragDrop.bind({});

const TemplateExampleManual = () => {
  // import reqwest from 'reqwest';
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState(false)

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });

    setUploading(true)

    // You can use any AJAX library you like
    reqwest({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        setFileList([])
        setUploading(false)
        message.success('upload successfully.');
      },
      error: () => {
        setUploading(false)
        message.error('upload failed.');
      },
    });
  };

  const props = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: file => {
      setFileList([...fileList, file])
      return false;
    },
    fileList,
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  );

}

export const UploadExampleManual = TemplateExampleManual.bind({});

const TemplateExampleCustomizeProgress = () => {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  )
}

export const UploadExampleCustomizeProgress = TemplateExampleCustomizeProgress.bind({});

// const TemplateExample = () => {
// }

// export const UploadExample = TemplateExample.bind({});
