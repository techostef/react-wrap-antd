import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import "./Sidebar.scss";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface IMenus {
  id?: string | number,
  content?: any,
  icon?: any,
  children?: IMenus[]
}

interface ISidebar {
  menus: IMenus[]
}

const Sidebar: React.FC<ISidebar> = ({
  menus,
}) => {
  
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  }

  const renderMenus = () => {
    return (
      menus?.map((item) => {
        if (item?.children) {
          return (
            <SubMenu key={item?.id} icon={item?.icon} title={item.content}>
              {item.children.map((item) => {
                return (
                  <Menu.Item key={item?.id} icon={item?.icon}>{item?.content}</Menu.Item>
                )
              })}
            </SubMenu>
          )
        } else {
          return (
            <Menu.Item key={item?.id} icon={item?.icon}>
              {item?.content}
            </Menu.Item>
          )
        }
      })
    )
  }

  return (
    <Layout className="fmlx-sidebar" style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div
          style={{
            height: 32,
            margin: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        />
        <Menu 
          mode="inline"
          theme="dark" 
          defaultSelectedKeys={['1']}
        >
          {renderMenus()}
        </Menu>
      </Sider>
    </Layout>
  )
}

export default React.memo(Sidebar);
