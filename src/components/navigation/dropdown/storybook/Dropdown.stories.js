/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import { Button, Menu, Space } from 'antd';
import Dropdown, { DropdownPlacement } from '../Dropdown';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  argTypes: {
    arrow: argTypesEnum.BOOL_FALSE,
    className: argTypesEnum.STRING,
    dataTestId: argTypesEnum.STRING,
    disabled: argTypesEnum.BOOL_FALSE,
    destroyPopupOnHide: argTypesEnum.BOOL_FALSE,
    getPopupContainer: argTypesEnum.EVENTS,
    onVisibleChange: argTypesEnum.EVENTS,
    overlay: argTypesEnum.OBJECT,
    overlayClassName: argTypesEnum.STRING,
    overlayStyle: argTypesEnum.OBJECT,
    placement: {
      size: argTypesEnum.RADIO({
        defaultValue: DropdownPlacement.bottomLeft,
        options: DropdownPlacement,
      }),
    },
    trigger: argTypesEnum.ARRAY,
    visible: argTypesEnum.BOOL_FALSE,
  },
};

const TemplateBasicDropdownMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );
  
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Hover me <DownOutlined />
      </a>
    </Dropdown>
  )
}

const TemplateDropdownWithPlacement = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  
  return (
    <Space direction="vertical">
      <Space wrap size={50}>
        <Dropdown overlay={menu} placement={DropdownPlacement.bottomLeft}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Bottom Left
          </a>
        </Dropdown>
        <Dropdown overlay={menu} placement={DropdownPlacement.bottomCenter}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Bottom Center
          </a>
        </Dropdown>
        <Dropdown overlay={menu} placement={DropdownPlacement.bottomRight}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Bottom Right
          </a>
        </Dropdown>
      </Space>
      <Space wrap size={70}>
        <Dropdown overlay={menu} placement={DropdownPlacement.topLeft}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Top Left
          </a>
        </Dropdown>
        <Dropdown overlay={menu} placement={DropdownPlacement.topCenter}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Top Center
          </a>
        </Dropdown>
        <Dropdown overlay={menu} placement={DropdownPlacement.topRight}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Top Right
          </a>
        </Dropdown>
      </Space>
    </Space>
  )
}

const TemplateDropdownWithArrow = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  
  return (
    <Space direction="vertical">
      <Space wrap size={50}>
        <Dropdown overlay={menu} placement={DropdownPlacement.bottomLeft} arrow>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Bottom Left
          </a>
        </Dropdown>
        <Dropdown overlay={menu} placement={DropdownPlacement.bottomCenter} arrow>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Bottom Center
          </a>
        </Dropdown>
        <Dropdown overlay={menu} placement={DropdownPlacement.bottomRight} arrow>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Bottom Right
          </a>
        </Dropdown>
      </Space>
      <Space wrap size={70}>
        <Dropdown overlay={menu} placement={DropdownPlacement.topLeft} arrow>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Top Left
          </a>
        </Dropdown>
        <Dropdown overlay={menu} placement={DropdownPlacement.topCenter} arrow>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Top Center
          </a>
        </Dropdown>
        <Dropdown overlay={menu} placement={DropdownPlacement.topRight} arrow>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Top Right
          </a>
        </Dropdown>
      </Space>
    </Space>
  )
}

const TemplateDropdownWithDisabledMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>
        3rd menu item（disabled）
      </Menu.Item>
    </Menu>
  );
  
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Hover me <DownOutlined />
      </a>
    </Dropdown>
  )
}

const TemplateDropdownWithClickTrigger = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Click me <DownOutlined />
      </a>
    </Dropdown>
  )  
}

const TemplateDropdownMenuWithinButton = () => {
  const handleButtonClick = (e) => {
    console.log('click', e);
  }
  
  const menu = (
    <Menu onClick={handleButtonClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
    </Menu>
  );
  return (
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
        Dropdown
      </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  )
}

const TemplateDropdownWithRightClickTrigger = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <div
        className="site-dropdown-context-menu"
        style={{
          textAlign: 'center',
          height: 200,
          lineHeight: '200px',
        }}
      >
        Right Click on here
      </div>
    </Dropdown>
  )
}

const TemplateDropdownWithOnVisibleChange = () => {
  const [visible, setVisible] = useState(false);
  
  const handleMenuClick = (e) => {
    if (e.key === '3') {
     setVisible(false);
    }
  }
  
  const handleVisibleChange= (flag) => {
    setVisible(flag);
  }
  
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
      <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
      <Menu.Item key="3">Clicking me will close the menu.</Menu.Item>
    </Menu>
  );
  
  return (
    <Dropdown
    overlay={menu}
    onVisibleChange={handleVisibleChange}
    visible={visible}
    >
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Hover me <DownOutlined />
      </a>
    </Dropdown>
  )
}

export const DropdownBasicMenu = TemplateBasicDropdownMenu.bind({});
export const DropdownWithPlacement = TemplateDropdownWithPlacement.bind({});
export const DropdownWithArrow = TemplateDropdownWithArrow.bind({});
export const DropdownWithDisabledMenu = TemplateDropdownWithDisabledMenu.bind({});
export const DropdownWithLeftClickTrigger = TemplateDropdownWithClickTrigger.bind({});
export const DropdownWithRightClickTrigger = TemplateDropdownWithRightClickTrigger.bind({});
export const DropdownMenuWithinButton = TemplateDropdownMenuWithinButton.bind({});
export const DropdownWithOnVisibleChange = TemplateDropdownWithOnVisibleChange.bind({});