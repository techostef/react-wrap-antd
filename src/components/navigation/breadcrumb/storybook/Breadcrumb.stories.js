/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Breadcrumb from '../Breadcrumb';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    className: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    itemRender: argTypesEnum.EVENTS,
    params: argTypesEnum.OBJECT,
    routes: argTypesEnum.ARRAY,
    separator: argTypesEnum.OBJECT,
  },
};

const TemplateBreadcrumbSimple = () => (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);

const TemplateBreadcrumbWithIcon = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>
);

const TemplateBreadcrumbWithSimpleSeparator = () => (
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);

const TemplateBreadcrumbCustomSeparator = () => (
  <Breadcrumb separator="">
    <Breadcrumb.Item>Location</Breadcrumb.Item>
    <Breadcrumb.Separator>:</Breadcrumb.Separator>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);

const TemplateBreadcrumbWithMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          General
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          Layout
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          Navigation
        </a>
      </Menu.Item>
    </Menu>
  );
  
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Component</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item overlay={menu}>
        <a href="">General</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Button</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export const BreadcrumbSimple = TemplateBreadcrumbSimple.bind({});
export const BreadcrumbWithIcon = TemplateBreadcrumbWithIcon.bind({});
export const BreadcrumbWithSimpleSeparator = TemplateBreadcrumbWithSimpleSeparator.bind({});
export const BreadcrumbWithSeparator = TemplateBreadcrumbCustomSeparator.bind({});
export const BreadcrumbWithDropdownMenu = TemplateBreadcrumbWithMenu.bind({});