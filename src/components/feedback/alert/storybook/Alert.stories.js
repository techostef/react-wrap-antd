/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, Space } from 'antd';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Alert, { AlertType } from '../Alert';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  argTypes: {
    closeText: argTypesEnum.STRING,
    message: argTypesEnum.STRING,
    banner: argTypesEnum.BOOL_FALSE,
    closable: argTypesEnum.BOOL_TRUE,
    showIcon: argTypesEnum.BOOL_FALSE,
    type: argTypesEnum.RADIO({
      defaultValue: AlertType.success,
      options: AlertType,
    })
  },

};

const TemplateBasicAlert = (args) => (
  <Alert {...args} />
);

const TemplateClosableAlert = (args) => {
  const onClose = () => {
    alert('handle close event')
  }

  return (
    <>
      <Alert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={onClose}
      />
      <br />
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        onClose={onClose}
      />
    </>
  )
};

const TemplateAlertWithIcon = () => {
  return (
    <>
      <Alert message="Success Tips" type="success" showIcon />
      <br />
      <Alert message="Informational Notes" type="info" showIcon />
      <br />
      <Alert message="Warning" type="warning" showIcon closable />
      <br />
      <Alert message="Error" type="error" showIcon />
      <br />
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <br />
      <Alert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
      <br />
      <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
      />
      <br />
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </>
  )
}

const TemplateAlertAsABanner = () => {
  return (
    <>
      <Alert message="Warning text" banner />
      <br />
      <Alert
        message="Very long warning text warning text text text text text text text"
        banner
        closable
      />
      <br />
      <Alert showIcon={false} message="Warning text without icon" banner />
      <br />
      <Alert type="error" message="Error text" banner />
    </>
  )
}

const TemplateAlertWithCustomAction = () => {
  return (
    <>
      <Alert
        message="Success Tips"
        type="success"
        showIcon
        action={
          <Button size="small" type="text">
            UNDO
          </Button>
        }
        closable
      />
      <br />
      <Alert
        message="Error Text"
        showIcon
        description="Error Description Error Description Error Description Error Description"
        type="error"
        action={
          <Button size="small" danger>
            Detail
          </Button>
        }
      />
      <br />
      <Alert
        message="Warning Text"
        type="warning"
        action={
          <Space>
            <Button size="small" type="ghost">
              Done
            </Button>
          </Space>
        }
        closable
      />
      <br />
      <Alert
        message="Info Text"
        description="Info Description Info Description Info Description Info Description"
        type="info"
        action={
          <Space direction="vertical">
            <Button size="small" type="primary">
              Accept
            </Button>
            <Button size="small" danger type="ghost">
              Decline
            </Button>
          </Space>
        }
        closable
      />
    </>
  )
}

export const BasicAlert = TemplateBasicAlert.bind({});
BasicAlert.args = {
  message: 'Alert Text',
}

export const ClosableAlert = TemplateClosableAlert.bind({});
export const AlertWithIcon = TemplateAlertWithIcon.bind({});
export const AlertAsABanner = TemplateAlertAsABanner.bind({});
export const AlertWithCustomAction = TemplateAlertWithCustomAction.bind({});
