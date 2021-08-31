/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import argTypesEnum from '../../../../enums/argTypesEnum';
import Modal from '../Modal';
import { useState } from 'react';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  argTypes: {
    afterClose: argTypesEnum.EVENTS,
    bodyStyle: argTypesEnum.OBJECT,
    cancelButtonProps: null,
    cancelText: argTypesEnum.STRING,
    centered: argTypesEnum.BOOL_FALSE,
    closable: argTypesEnum.BOOL_TRUE,
    closeIcon: null,
    confirmLoading: argTypesEnum.BOOL_FALSE,
    destroyOnClose: argTypesEnum.BOOL_FALSE,
    focusTriggerAfterClose: argTypesEnum.BOOL_TRUE,
    footer: null,
    forceRender: argTypesEnum.BOOL_FALSE,
    getContainer: argTypesEnum.EVENTS,
    keyboard: argTypesEnum.BOOL_FALSE,
    mask: argTypesEnum.BOOL_TRUE,
    maskClosable: argTypesEnum.BOOL_TRUE,
    maskStyle: argTypesEnum.OBJECT,
    modalRender: null,
    okButtonProps: null,
    okText: null,
    okType: argTypesEnum.STRING,
    style: argTypesEnum.OBJECT,
    title: null,
    visible: argTypesEnum.BOOL_TRUE,
    width: argTypesEnum.STRING,
    wrapClassName: argTypesEnum.STRING,
    zIndex: argTypesEnum.NUMBER,
    onCancel: argTypesEnum.EVENTS,
    onOk: argTypesEnum.EVENTS,
  },
};

const TemplateBasicModal = (args) => {
  return (
    <Modal {...args} />
  )
};

const TemplateModalWithCostumizedFooter = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  }

  const handleOk = () => {

  }

  const showModal = () => {
    setVisible(true);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        visible={visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
};

const TemplateConfirmationModal = () => {
  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        alert('OK');
      },
      onCancel() {
        alert('Cancel');
      },
    });
  }

  const showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        alert('OK');
      },
      onCancel() {
        alert('Cancel');
      },
    });
  }

  const showPromiseConfirm = () => {
    Modal.confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => alert('Oops errors!'));
      },
      onCancel() {},
    });
  }

  const showPropsConfirm = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      okButtonProps: {
        disabled: true,
      },
      cancelText: 'No',
      onOk() {
        alert('OK');
      },
      onCancel() {
        alert('Cancel');
      },
    });
  }

  return (
    <Space>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showPromiseConfirm}>With promise</Button>
      <Button onClick={showDeleteConfirm} type="dashed">
        Delete
      </Button>
      <Button onClick={showPropsConfirm} type="dashed">
        With extra props
      </Button>
    </Space>
  )
}

const TemplateModalInfo = () => {
  const showModal = () => {
    Modal.info({
      title: 'Info',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        alert('OK');
      },
    });
  }

  return (
    <Space>
      <Button onClick={showModal}>Show Modal Info</Button>
    </Space>
  )
}

const TemplateModalSuccess = () => {
  const showModal = () => {
    Modal.success({
      title: 'Success',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        alert('OK');
      },
    });
  }
  return (
    <Space>
      <Button onClick={showModal}>Show Modal Success</Button>
    </Space>
  )
}

const TemplateModalError = () => {
  const showModal = () => {
    Modal.success({
      title: 'Error',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        alert('OK');
      },
    });
  }
  return (
    <Space>
      <Button onClick={showModal}>Show Modal Error</Button>
    </Space>
  )
}

const TemplateModalWarning = () => {
  const showModal = () => {
    Modal.success({
      title: 'Warning',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        alert('OK');
      },
    });
  }
  return (
    <Space>
      <Button onClick={showModal}>Show Modal Warning</Button>
    </Space>
  )
}

export const BasicModal = TemplateBasicModal.bind({});
BasicModal.args = {
  title: 'Basic Modal',
  children: 'Some content here',
};

export const ModalWithCostumizedFooter = TemplateModalWithCostumizedFooter.bind({});
export const ConfirmationModal = TemplateConfirmationModal.bind({});
export const ModalInfo = TemplateModalInfo.bind({});
export const ModalSuccess = TemplateModalSuccess.bind({});
export const ModalError = TemplateModalError.bind({});
export const ModalWarning = TemplateModalWarning.bind({});
