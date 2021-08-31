/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button } from 'antd';
import Popconfirm, { PopconfirmButtonType, PopconfirmPlacement, PopconfirmTrigger } from '../Popconfirm';
import argTypesEnum from '../../../../enums/argTypesEnum';

export default {
  title: 'Feedback/Popconfirm',
  component: Popconfirm,
  argTypes: {
    cancelButtonProps: argTypesEnum.OBJECT,
    cancelText: argTypesEnum.STRING,
    disabled: argTypesEnum.BOOL_FALSE,
    icon: null,
    okButtonProps: argTypesEnum.OBJECT,
    okText: argTypesEnum.STRING,
    okType: argTypesEnum.RADIO({
      defaultValue: PopconfirmButtonType.primary,
      options: PopconfirmButtonType,
    }),
    title: argTypesEnum.STRING,
    placement: argTypesEnum.RADIO({
      defaultValue: PopconfirmPlacement.top,
      options: PopconfirmPlacement
    }),
    onCancel: argTypesEnum.EVENTS,
    onConfirm: argTypesEnum.EVENTS,
    trigger: argTypesEnum.RADIO({
      defaultValue: PopconfirmTrigger.hover,
      options: PopconfirmTrigger
    }),
    arrowPointAtCenter: argTypesEnum.BOOL_FALSE,
  },
};

const TemplateBasicPopconfirm = (args) => {
  const onConfirm = () => {
    alert('confirm')
  }

  const onCancel = () => {
    alert('cancel')
  }

  return (
    <Popconfirm
      {...args}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <Button>
        Delete
      </Button>
    </Popconfirm>
  )
}

const TemplatePlacement = (args) => {
  
  const text = args.title;
  const confirm = () => {
    alert('confirm');
  }

  return (
    <div>
      <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
        <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button>Top</Button>
        </Popconfirm>
        <Popconfirm
          placement="topRight"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>TR</Button>
        </Popconfirm>
      </div>
      <div style={{ width: 70, float: 'left' }}>
        <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button>LT</Button>
        </Popconfirm>
        <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button>Left</Button>
        </Popconfirm>
        <Popconfirm
          placement="leftBottom"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>LB</Button>
        </Popconfirm>
      </div>
      <div style={{ width: 70, marginLeft: 304 }}>
        <Popconfirm
          placement="rightTop"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>RT</Button>
        </Popconfirm>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button>Right</Button>
        </Popconfirm>
        <Popconfirm
          placement="rightBottom"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>RB</Button>
        </Popconfirm>
      </div>
      <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="bottomLeft"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>BL</Button>
        </Popconfirm>
        <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button>Bottom</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottomRight"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Button>BR</Button>
        </Popconfirm>
      </div>
    </div>
  )
}

const TemplateAsyncClose = (args) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    alert('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Popconfirm
        {...args}
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <Button type="primary" onClick={showPopconfirm}>
          Open Popconfirm with async logic
        </Button>
      </Popconfirm>
    </>
  );
}

export const BasicPopconfirm = TemplateBasicPopconfirm.bind({});
BasicPopconfirm.args = {
  title: 'Popconfirm title',
  okText: 'Yes',
  cancelText: 'No',
};

export const Placement = TemplatePlacement.bind({});
BasicPopconfirm.args = {
  title: 'Popconfirm title',
};

export const AsyncClose = TemplateAsyncClose.bind({});
BasicPopconfirm.args = {
  title: 'Popconfirm title',
};