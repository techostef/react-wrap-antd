/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Breadcrumb, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  TeamOutlined
} from '@ant-design/icons';
import Layout from '../Layout';
import argTypesEnum from '../../../../enums/argTypesEnum';

export default {
  title: 'Layout/Layout',
  component: Layout,
  argTypes: {
    hasSider: argTypesEnum.BOOL_FALSE,
    className: argTypesEnum.STRING,
    style: argTypesEnum.OBJECT,
  },
};

const styleHeader = {
  textAlign: 'center',
  color: '#fff',
}

const styleContent = {
  width: '100%',
  padding: 30,
  textAlign: 'center',
}

const styleSider = {
  textAlign: 'center',
  color: '#fff',
}

const styleFooter = {
  textAlign: 'center',
}

const Template = () => (
  <Layout>
    <Layout.Header>
      <div style={styleHeader}>
        Header
      </div>
    </Layout.Header>
    <Layout.Content>
      <div style={styleContent}>
        Content
      </div>
    </Layout.Content>
    <Layout.Footer>
      <div style={styleFooter}>
        Footer
      </div>
    </Layout.Footer>
  </Layout>
);

const TemplateWithRightSider = () => (
  <Layout>
    <Layout.Header>
      <div style={styleHeader}>
        Header
      </div>
    </Layout.Header>
    <Layout>
      <Layout.Sider>
        <div style={styleSider}>
          Sider
        </div>
      </Layout.Sider>
      <Layout.Content>
        <div style={styleContent}>
          Content
        </div>
      </Layout.Content>
    </Layout>
    <Layout.Footer>
      <div style={styleFooter}>
        Footer
      </div>
    </Layout.Footer>
  </Layout>
);

const TemplateWithLeftSider = () => (
  <Layout>
    <Layout.Header>
      <div style={styleHeader}>
        Header
      </div>
    </Layout.Header>
    <Layout>
      <Layout.Content>
        <div style={styleContent}>
          Content
        </div>
      </Layout.Content>
      <Layout.Sider>
        <div style={styleSider}>
          Sider
        </div>
      </Layout.Sider>
    </Layout>
    <Layout.Footer>
      <div style={styleFooter}>
        Footer
      </div>
    </Layout.Footer>
  </Layout>
);

const TemplateLayoutTopNav = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header>
        <div style={{ float: 'left', width: 100, height: 25, margin: '20px 0', backgroundColor: '#fff', opacity: 0.5 }}>
          Logo
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ margin: 30 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 50, backgroundColor: '#fff' }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Footer
      </Footer>
    </Layout>
  )
}

const TemplateSideNav = () => {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  return (
    <Layout>
      <Header className="header">
        <div style={{ float: 'left', width: 100, height: 25, margin: '20px 0', backgroundColor: '#fff', opacity: 0.5 }}>
          Logo
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

const TemplateSideNavCollapsible = () => {

  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  }

  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div
          style={{
            height: 32,
            margin: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export const BasicLayout = Template.bind({});
export const LayoutWithRightSider = TemplateWithRightSider.bind({});
export const LayoutWithLeftSider = TemplateWithLeftSider.bind({});
export const LayoutTopNav = TemplateLayoutTopNav.bind({});
export const LayoutSideNav = TemplateSideNav.bind({});
export const LayoutSideNavCollapsible = TemplateSideNavCollapsible.bind({});
