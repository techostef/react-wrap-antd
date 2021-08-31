/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { Divider } from 'antd';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

import Tag from '../Tag';
const { CheckableTag } = Tag;

export default {
  title: 'DataDisplay/Tag',
  component: Tag,
  argTypes: {
    closable: argTypesEnum.BOOL_FALSE,
    closeIcon: null,
    color: argTypesEnum.STRING,
    icon: null,
    visible: argTypesEnum.BOOL_TRUE,
    onClose: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Tag
    {...args}
  />
);

export const TagDefault = Template.bind({});
TagDefault.args = {
  children: 'Text',
};

const TemplateExampleBasic = () => {
  function log(e) {
    console.log(e);
  }
  
  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }
  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
    </>
  )
}

export const TagDefaultExampleBasic = TemplateExampleBasic.bind({});

const TemplateExampleColor = () => {
  return (
    <>
      <Divider orientation="left">Presets</Divider>
      <div>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </div>
      <Divider orientation="left">Custom</Divider>
      <div>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </>
  )
}

export const TagDefaultExampleColor = TemplateExampleColor.bind({});

const TemplateExampleCheckable = () => {

  const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

  const [selectedTags, setselectedTags] = useState(['Books'])

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setselectedTags(nextSelectedTags)
  }

  return (
    <>
      <span style={{ marginRight: 8 }}>Categories:</span>
      {tagsData.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );

}

export const TagDefaultExampleCheckable = TemplateExampleCheckable.bind({});

const TemplateExampleWithIcon = () => {
  return (
    <>
      <Divider orientation="left">Without icon</Divider>
      <div>
        <Tag color="success">success</Tag>
        <Tag color="processing">processing</Tag>
        <Tag color="error">error</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="default">default</Tag>
      </div>
      <Divider orientation="left">With icon</Divider>
      <div>
        <Tag icon={<CheckCircleOutlined />} color="success">
          success
        </Tag>
        <Tag icon={<SyncOutlined spin />} color="processing">
          processing
        </Tag>
        <Tag icon={<CloseCircleOutlined />} color="error">
          error
        </Tag>
        <Tag icon={<ExclamationCircleOutlined />} color="warning">
          warning
        </Tag>
        <Tag icon={<ClockCircleOutlined />} color="default">
          waiting
        </Tag>
        <Tag icon={<MinusCircleOutlined />} color="default">
          stop
        </Tag>
      </div>
    </>
  )
}

export const TagDefaultExampleWithIcon = TemplateExampleWithIcon.bind({});
