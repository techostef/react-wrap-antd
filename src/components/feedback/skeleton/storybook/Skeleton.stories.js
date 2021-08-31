/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Skeleton from '../Skeleton';
import { Space, Divider, Switch, Form, Radio } from 'antd';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    active: argTypesEnum.BOOL_FALSE,
    avatar: argTypesEnum.BOOL_FALSE,
    loading: argTypesEnum.BOOL_FALSE,
    paragraph: argTypesEnum.OBJECT,
    round: argTypesEnum.BOOL_FALSE,
    title: argTypesEnum.BOOL_FALSE,
  },
};

const Template = (args) => {
  return (
    <Skeleton {...args} />
  )
};

const TemplateSkeletonCombination = () => {
  const [active, setActive] = useState(false);
  const [size, setSize] = useState(false);
  const [buttonShape, setButtonShape] = useState(false);
  const [avatarShape, setAvatarShape] = useState(false);
  
  const handleActiveChange = (checked) => {
    setActive(checked);
  }

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  }

  const handleShapeChange = (shape) => (e) => {
    if (shape === 'avatarShape') {
      setAvatarShape(e.target.value);
    } else if (shape === 'buttonShape') {
      setButtonShape(e.target.value);
    }
  }

  return (
    <>
      <Space>
        <Skeleton.Button active={active} size={size} shape={buttonShape} />
        <Skeleton.Button active={active} size={size} shape={buttonShape} />
        <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
        <Skeleton.Input style={{ width: 200 }} active={active} size={size} />
      </Space>
      <br />
      <br />
      <Skeleton.Image />
      <Divider />
      <Form layout="inline" style={{ margin: '16px 0' }}>
        <Form.Item label="Active">
          <Switch checked={active} onChange={handleActiveChange} />
        </Form.Item>
        <Form.Item label="Size">
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Button Shape">
          <Radio.Group value={buttonShape} onChange={handleShapeChange('buttonShape')}>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="round">Round</Radio.Button>
            <Radio.Button value="circle">Circle</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Avatar Shape">
          <Radio.Group value={avatarShape} onChange={handleShapeChange('avatarShape')}>
            <Radio.Button value="square">Square</Radio.Button>
            <Radio.Button value="circle">Circle</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  )
}

export const BasicSkeleton = Template.bind({});
BasicSkeleton.args = {
  paragraph: { rows: 4 }
}

export const SkeletonCombination = TemplateSkeletonCombination.bind({});