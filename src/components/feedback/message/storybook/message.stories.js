/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button } from 'antd';
import message from '../message';
import Space from '../../../layout/space/Space';

export default {
  title: 'Feedback/message',
  argTypes: {
  },
};

const TemplateBasicMessage = () => {
  const showMessage = () => {
    message.success('Success message');
  }

  return (
    <Button onClick={showMessage}>
      Show Message
    </Button>
  )
};

const TemplateMessageType = () => {
  const success = () => {
    message.success('This is a success message');
  }

  const error = () => {
    message.error('This is an error message');
  }

  const warning = () => {
    message.warning('This is a warning message');
  }

  return (
    <Space>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </Space>
  )
}

const TemplateSequentialMessage = () => {
  const success = () => {
    message
      .loading('Action in progress..', 2.5)
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished is finished', 2.5));
  };
  
  return (
    <Button onClick={success}>Success</Button>
  )
}

export const BasicMessage = TemplateBasicMessage.bind({});
export const MessageType = TemplateMessageType.bind({});
export const SequentialMessage = TemplateSequentialMessage.bind({});
