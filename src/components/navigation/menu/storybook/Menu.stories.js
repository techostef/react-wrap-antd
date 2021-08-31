/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useMemo } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Menu, { MenuMode, MenuTheme, MenuTriggerSubMenuAction } from '../Menu';
import { Button, Switch, Divider } from 'antd';
import {  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  SettingOutlined,
  DesktopOutlined,
  ContainerOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined, } from '@ant-design/icons';

export default {
  title: 'Navigation/Menu',
  component: Menu,
  argTypes: {
    className: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    defaultOpenKeys: argTypesEnum.ARRAY,
    defaultSelectedKeys: argTypesEnum.ARRAY,
    expandIcon: null,
    forceSubMenuRender: argTypesEnum.BOOL_FALSE,
    inlineCollapsed: argTypesEnum.BOOL_FALSE,
    inlineIndent: argTypesEnum.NUMBER,
    mode: {
      size: argTypesEnum.RADIO({
        defaultValue: MenuMode.vertical,
        options: MenuMode,
      }),
    },
    multiple: argTypesEnum.BOOL_FALSE,
    onClick: argTypesEnum.EVENTS,
    onDeselect: argTypesEnum.EVENTS,
    onOpenChange: argTypesEnum.EVENTS,
    onSelect: argTypesEnum.EVENTS,
    openKeys: argTypesEnum.ARRAY,
    overflowedIndicator: null,
    selectable: argTypesEnum.BOOL_TRUE,
    selectedKeys: argTypesEnum.ARRAY,
    style: null,
    subMenuCloseDelay: argTypesEnum.NUMBER,
    subMenuOpenDelay: argTypesEnum.NUMBER,
    theme: {
      size: argTypesEnum.RADIO({
        defaultValue: MenuTheme.light,
        options: MenuTheme,
      }),
    },
    triggerSubMenuAction: {
      size: argTypesEnum.RADIO({
        defaultValue: MenuTriggerSubMenuAction.hover,
        options: MenuTriggerSubMenuAction,
      }),
    },
  },
};

const TemplateHorizontalTopNavigation = () => {
  const [current, setCurrent] = useState('mail');
  
  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }
  
  return (
    <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
  )
}

const TemplateVerticalMenuWithInlineSubmenus = () => {
  const handleClick = e => console.log('click ', e);
  
  return (
    <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </Menu.SubMenu>
      </Menu>
  )
}

const TemplateInlineMenuWithCollapsedAndDarkTheme = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const ToggleCollapsed = () => {
    setCollapsed(!collapsed);
  }
  
  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={ToggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Option 3
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

const TemplateOnlyOpenCurrentSubmenu = () => {
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  const [openKeys, setOpenKeys] = useState(['sub1']);
  
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  
  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

const TemplateVerticalMenuWithPopsUpSubMenu = () => {
  const handleClick = e => console.log('click', e);
  
  return (
    <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
      <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Iteom 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

const TemplateMenuWithThemes = () => {
  const [theme, setTheme] = useState(MenuTheme.dark);
  const [current, setCurrent] = useState('1');
  
  const changeTheme = (value) => {
    setTheme(value ? MenuTheme.dark : MenuTheme.light)
  }
  
  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }
  
  return (
    <>
    <Switch
      checked={theme === MenuTheme.dark}
      onChange={changeTheme}
      checkedChildren="Dark"
      unCheckedChildren="Light"
    />
    <br/>
    <br/>
    <Menu
      theme={theme}
      onClick={handleClick}
      style={{ width: 256 }}
      defaultOpenKeys={['sub1']}
      selectedKeys={current}
      mode="inline"
    >
      <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </Menu.SubMenu>
    </Menu>
    </>
  )
}

const TemplateMenuWithDynamicModeAndStyle = () => {
  const [mode, setMode] = useState(MenuMode.inline);
  const [theme, setTheme] = useState(MenuTheme.light);

  const changeMode = value => {
    setMode(value ? MenuMode.vertical : MenuMode.inline);
  };

  const changeTheme = value => {
    setTheme(value ? MenuTheme.dark : MenuTheme.light);
  };
  
  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
      >
        <Menu.Item key="1" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <Menu.SubMenu key="sub1-2" title="Submenu">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="link" icon={<LinkOutlined />}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
}

export const MenuHorizontalTopNavigation = TemplateHorizontalTopNavigation.bind({});
export const MenuVerticalMenuWithInlineSubmenus = TemplateVerticalMenuWithInlineSubmenus.bind({});
export const MenuInlineMenuWithCollapsed = TemplateInlineMenuWithCollapsedAndDarkTheme.bind({});
export const MenuOnlyOpenCurrentSubmenu = TemplateOnlyOpenCurrentSubmenu.bind({});
export const MenuVerticalWithPopsUpSubMenu = TemplateVerticalMenuWithPopsUpSubMenu.bind({});
export const MenuWithChangeTheme = TemplateMenuWithThemes.bind({});
export const MenuWithDynamicModeAndStyle = TemplateMenuWithDynamicModeAndStyle.bind({});