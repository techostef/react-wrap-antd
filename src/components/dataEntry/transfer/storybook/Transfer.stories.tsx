/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Button, Switch } from 'antd';
import argTypesEnum from '../../../../enums/argTypesEnum';

import Transfer from '../Transfer';

export default {
  title: 'DataEntry/Transfer',
  component: Transfer,
  argTypes: {
    dataSource: argTypesEnum.ARRAY,
    disabled: argTypesEnum.BOOL_FALSE,
    filterOption: argTypesEnum.EVENTS,
    footer: argTypesEnum.EVENTS,
    listStyle: null,
    locale: argTypesEnum.OBJECT,
    oneWay: argTypesEnum.BOOL_FALSE,
    operations: argTypesEnum.ARRAY,
    operationStyle: argTypesEnum.OBJECT,
    pagination: null,
    render: argTypesEnum.EVENTS,
    selectAllLabels: null,
    selectedKeys: argTypesEnum.ARRAY,
    showSearch: argTypesEnum.BOOL_FALSE,
    showSelectAll: argTypesEnum.BOOL_TRUE,
    targetKeys: argTypesEnum.ARRAY,
    titles: argTypesEnum.ARRAY,
    onChange: argTypesEnum.EVENTS,
    onScroll: argTypesEnum.EVENTS,
    onSearch: argTypesEnum.EVENTS,
    onSelectChange: argTypesEnum.EVENTS,
  },
};

const Template = (args) => (
  <Transfer
    {...args}
  />
);

export const TransferDefault = Template.bind({});
TransferDefault.args = {
};

const TemplateExampleBasic = () => {
  const mockData = [];
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    });
  }

  const initialTargetKeys = mockData.filter(item => +item.key > 10).map(item => item.key);

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  return (
    <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      render={item => item.title}
    />
  );
}

export const TransferExampleBasic = TemplateExampleBasic.bind({});

const TemplateExampleOneWay = () => {
  const mockData = [];
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      disabled: i % 3 < 1,
    });
  }

  const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
  const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys(nextTargetKeys);

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys])

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };

  const handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  const handleDisable = disabled => {
    setDisabled(disabled)
  };

  return (
    <>
      <Transfer
        dataSource={mockData}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        onScroll={handleScroll}
        render={item => item.title}
        disabled={disabled}
        oneWay
        style={{ marginBottom: 16 }}
      />
      <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled}
        onChange={handleDisable}
      />
    </>
  );
}

export const TransferExampleOneWay = TemplateExampleOneWay.bind({});

const TemplateExampleAdvanced = () => {
  const [mockData, setMockData] = useState([])
  const [targetKeys, setTargetKeys] = useState([])

  const getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    setMockData(mockData);
    setTargetKeys(targetKeys);
  };
  
  useEffect(() => {
    getMock();
  }, [])

  const handleChange = targetKeys => {
    setTargetKeys(targetKeys);
  };

  const renderFooter = () => (
    <Button size="small" style={{ float: 'right', margin: 5 }} onClick={getMock}>
      reload
    </Button>
  );

  return (
    <Transfer
      dataSource={mockData}
      showSearch
      listStyle={{
        width: 250,
        height: 300,
      }}
      operations={['to right', 'to left']}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={item => `${item.title}-${item.description}`}
      footer={renderFooter}
    />
  );
}

export const TransferExampleAdvanced = TemplateExampleAdvanced.bind({});

// const TemplateExample = () => {}

// export const TransferExample = TemplateExample.bind({});