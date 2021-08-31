/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import PageHeader from '../PageHeader';
import { Menu, Dropdown, Button, Tag, Paragraph, Row, Input } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

export default {
  title: 'Navigation/PageHeader',
  component: PageHeader,
  argTypes: {
    avatar: null,
    backIcon: null,
    breadcrumb: null,
    breadcrumbRender: argTypesEnum.EVENT,
    className: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    extra: null,
    footer: null,
    ghost: argTypesEnum.BOOL_TRUE,
    subTitle: null,
    onBack: argTypesEnum.EVENTS,
    tags: null,
    title: null,
  },
};

const Template = (args) => (
  <PageHeader
    {...args}
  />
);

const TemplatePageHeaderWithBreadcrumb = () => {
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'First-level Menu',
    },
    {
      path: 'first',
      breadcrumbName: 'Second-level Menu',
    },
    {
      path: 'second',
      breadcrumbName: 'Third-level Menu',
    },
  ];
  
  return (
    <PageHeader
      className="site-page-header"
      title="Title"
      breadcrumb={{ routes }}
      subTitle="This is a subtitle"
    />
  );
}

const TemplatePageHeaderCompleteExample = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  
  const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
  
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'First-level Menu',
    },
    {
      path: 'first',
      breadcrumbName: 'Second-level Menu',
    },
    {
      path: 'second',
      breadcrumbName: 'Third-level Menu',
    },
  ];
  
  const IconLink = ({ src, text }) => (
    <a className="example-link">
      <img className="example-link-icon" src={src} alt={text} />
      {text}
    </a>
  );
  
  const content = (
    <>
      <div>
        Ant Design interprets the color system into two levels: a system-level color system and a
        product-level color system.
      </div>
      <div>
        Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
        easier for designers to have a clear psychological expectation of color when adjusting colors,
        as well as facilitate communication in teams.
      </div>
      <div>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          text="Quick Start"
        />
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          text=" Product Info"
        />
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
          text="Product Doc"
        />
      </div>
    </>
  );
  
  const Content = ({ children, extraContent }) => (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
  
  return (
      <PageHeader
      title="Title"
      className="site-page-header"
      subTitle="This is a subtitle"
      tags={<Tag color="blue">Running</Tag>}
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
        <DropdownMenu key="more" />,
      ]}
      avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
      breadcrumb={{ routes }}
    >
      <Content
        extraContent={
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
            alt="content"
            width="100%"
          />
        }
        children={content}
      />
    </PageHeader>
  )        
}

const TemplatePageHeaderWithSearch = () => {
  const { Search } = Input;
  return (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Title"
      subTitle={(
        <Search
          placeholder="Search"
          onChange={() => {}}
          onPressEnter={() => {}}
          onSearch={() => {}}
          style={{
            marginLeft: "200px",
            height: "32px",
            width: "450px",
          }}
        />
      )}
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
      className="fmlx-header-search"
    >
    </PageHeader>
  )
}

export const PageHeaderDefault = Template.bind({});
PageHeaderDefault.args = {
  className: "site-page-header",
  onBack: () => {},
  title: "Title",
  subTitle: "This is a subtitle",
};

export const PageHeaderWithBreadcrumb = TemplatePageHeaderWithBreadcrumb.bind({});
export const PageHeaderCompleteExample = TemplatePageHeaderCompleteExample.bind({});
export const PageHeaderExampleSearch = TemplatePageHeaderWithSearch.bind({});