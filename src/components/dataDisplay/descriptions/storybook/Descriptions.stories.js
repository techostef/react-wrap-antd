/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Descriptions, { DescriptionsLayout, DescriptionsSize } from '../Descriptions';
import { Badge, Radio, Button } from 'antd';

export default {
  title: 'DataDisplay/Descriptions',
  component: Descriptions,
  argTypes: {
    bordered: argTypesEnum.BOOL_FALSE,
    className: argTypesEnum.STRING,
    colon: argTypesEnum.BOOL_TRUE,
    column: argTypesEnum.NUMBER,
    contentStyle: argTypesEnum.OBJECT,
    dataTestId: argTypesEnum.STRING,
    extra: null,
    labelStyle: argTypesEnum.OBJECT,
    layout: argTypesEnum.RADIO({
      defaultValue: DescriptionsLayout.horizontal,
      options: DescriptionsLayout,
    }),
    size: argTypesEnum.RADIO({
      defaultValue: DescriptionsSize.default,
      options: DescriptionsSize,
    }),
    title: null,
  },
};

const TemplateBasicDescriptions = () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
)

const TemplateDescriptionsWithBorder = () => (
  <Descriptions title="User Info" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </Descriptions.Item>
  </Descriptions>
)

const TemplateDescriptionsWithCustomSize = () => {
  const [size, setSize] = useState(DescriptionsSize.default);
  
  const handleChange = (e) => {
    setSize(e.target.value)
  }
  
  return (
    <div>
        <Radio.Group onChange={handleChange} value={size}>
          <Radio value="default">default</Radio>
          <Radio value="middle">middle</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
        <br />
        <br />
        <Descriptions
          bordered
          title="Custom Size"
          size={size}
          extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <Descriptions
          title="Custom Size"
          size={size}
          extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        </Descriptions>
      </div>
  )
}

const TemplateDescriptionsVerticalBordered = () => (
  <Descriptions title="User Info" layout={DescriptionsLayout.vertical} bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </Descriptions.Item>
  </Descriptions>
)

export const DescriptionsBasic = TemplateBasicDescriptions.bind({});
export const DescriptionsWithBorder = TemplateDescriptionsWithBorder.bind({});
export const DescriptionsCustomSize = TemplateDescriptionsWithCustomSize.bind({});
export const DescriptionsVerticalBordered = TemplateDescriptionsVerticalBordered.bind({});
