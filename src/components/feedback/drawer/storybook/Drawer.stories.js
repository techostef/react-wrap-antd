/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Drawer, { DrawerPlacement } from '../Drawer';
import { Button, Form, Row, Col, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default {
  title: 'Feedback/Drawer',
  component: Drawer,
  argTypes: {
    afterVisibleChange: argTypesEnum.EVENTS,
    title: argTypesEnum.STRING,
    visible: argTypesEnum.BOOL_TRUE,
    bodyStyle: argTypesEnum.OBJECT,
    className: argTypesEnum.STRING,
    closable: argTypesEnum.BOOL_FALSE,
    closeIcon: argTypesEnum.OBJECT,
    containerWrapperStyle: argTypesEnum.OBJECT,
    destroyOnClose: argTypesEnum.BOOL_FALSE,
    drawerStyle: argTypesEnum.OBJECT,
    headerStyle: argTypesEnum.OBJECT,
    footer: argTypesEnum.OBJECT,
    footerStyle: argTypesEnum.OBJECT,
    forceRender: argTypesEnum.BOOL_FALSE,
    getContainer: argTypesEnum.EVENTS,
    headerStyle: argTypesEnum.OBJECT,
    height: argTypesEnum.STRING | argTypesEnum.NUMBER,
    keyboard: argTypesEnum.BOOL_FALSE,
    mask: argTypesEnum.BOOL_FALSE,
    maskClosable: argTypesEnum.BOOL_FALSE,
    maskStyle: argTypesEnum.OBJECT,
    placement: argTypesEnum.RADIO({
      defaultValue: DrawerPlacement.left,
      options: DrawerPlacement,
    }),
    push: argTypesEnum.OBJECT,
    style: argTypesEnum.OBJECT,
    width: argTypesEnum.STRING,
    zIndex: argTypesEnum.NUMBER,
    onClose: argTypesEnum.EVENTS
  },
};

const TemplateBasicDrawer = (args) => {
  return (
    <Drawer {...args}>
      Some content here
    </Drawer>
  )
};

const TemplateMultiLevelDrawer = (args) => {
  const [visible, setVisible] = useState(false);
  const [visibleChildren, setVisibleChildren] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  }

  const showChildrenDrawer = () => {
    setVisibleChildren(true);
  }

  const onChildrenDrawerClose = () => {
    setVisibleChildren(false);
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open drawer
      </Button>
      <Drawer
        {...args}
        title="Multi-level drawer"
        width={520}
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Button type="primary" onClick={showChildrenDrawer}>
          Two-level drawer
        </Button>
        <Drawer
          {...args}
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          visible={visibleChildren}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  )
}

const TemplateFormInDrawer = (args) => {
  const [visible, setVisible] = React.useState(false);
  
  const onClose = () => {
    setVisible(false);
  }

  const showDrawer = () => {
    setVisible(true);
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> New account
      </Button>
      <Drawer
        {...args}
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[{ required: true, message: 'Please choose the approver' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}

export const BasicDrawer = TemplateBasicDrawer.bind({});
BasicDrawer.args = {
  title: 'Basic Drawer',
}
export const MultiLevelDrawer = TemplateMultiLevelDrawer.bind({});
export const FormInDrawer = TemplateFormInDrawer.bind({});