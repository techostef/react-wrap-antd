/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { PlacementEnum } from '../../../../enums/dataEnum';

import Button from '../../../general/buttons/button/Button';
import Form from '../../form/Form';
import Mentions from '../Mentions';

export default {
  title: 'DataEntry/Mentions',
  component: Mentions,
  argTypes: {
    autoFocus: argTypesEnum.BOOL_FALSE,
    autoSize: argTypesEnum.BOOL_FALSE,
    defaultValue: argTypesEnum.STRING,
    filterOption: null,
    getPopupContainer: argTypesEnum.EVENTS,
    notFoundContent: null,
    placement: argTypesEnum.RADIO({
      defaultValue: PlacementEnum.bottom,
      options: PlacementEnum,
    }),
    prefix: null,
    split: argTypesEnum.STRING,
    validateSearch: argTypesEnum.EVENTS,
    value: argTypesEnum.STRING,
    onBlur: argTypesEnum.EVENTS,
    onChange: argTypesEnum.EVENTS,
    onFocus: argTypesEnum.EVENTS,
    onResize: argTypesEnum.EVENTS,
    onSearch: argTypesEnum.EVENTS,
    onSelect: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Mentions
    {...args}
  >
    <Mentions.Option value="afc163">afc163</Mentions.Option>
    <Mentions.Option value="zombieJ">zombieJ</Mentions.Option>
    <Mentions.Option value="yesmeck">yesmeck</Mentions.Option>
  </Mentions>
);

export const MentionsDefault = Template.bind({});
MentionsDefault.args = {
  children: 'Text',
};

const TemplateExampleWithForm = () => {
  const { Option, getMentions } = Mentions;
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };

  const checkMention = async (_: any, value: string) => {
    const mentions = getMentions(value);

    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };

  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="coders"
        label="Top coders"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ validator: checkMention }]}
      >
        <Mentions rows={1}>
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ required: true }]}
      >
        <Mentions rows={3} placeholder="You can use @ to ref user here">
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export const MentionsExampleWithForm = TemplateExampleWithForm.bind({});

// const TemplateExample = () => {

// }

// export const MentionsExample = TemplateExample.bind({});
