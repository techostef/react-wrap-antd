/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Switch } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Alert from '../../alert/Alert';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Spin, { SpinSize } from '../Spin';

export default {
  title: 'Feedback/Spin',
  component: Spin,
  argTypes: {
    delay: argTypesEnum.NUMBER,
    indicator: null,
    size: argTypesEnum.RADIO({
      defaultValue: SpinSize.medium,
      options: SpinSize,
    }),
    spinning: argTypesEnum.BOOL_FALSE,
    tip: argTypesEnum.STRING,
    wrapperClassName: argTypesEnum.STRING
  },
};

const Template = (args) => {
  return (
    <Spin {...args} />
  )
};

const TemplateEmbeddedMode = () => {
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setLoading(!loading);
  }

  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state：
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  )
}

const TemplateCustomIndicator = (args) => {
  const customIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <Spin {...args} indicator={customIcon} />
  )
}

export const BasicSpin = Template.bind({});
export const SpinEmbeddedMode = TemplateEmbeddedMode.bind({});
export const CustomIndicator = TemplateCustomIndicator.bind({});
