import React from 'react';
import { Menu as MenuComp, MenuProps } from 'antd';

export enum MenuMode {
  horizontal = 'horizontal',
  inline = 'inline',
  vertical = 'vertical',
}

export enum MenuTheme {
  dark = 'dark',
  light = 'light',
}

export enum MenuTriggerSubMenuAction {
  click = 'click',
  hover = 'hover',
}

interface IMenu extends MenuProps{}

const Menu: React.FC<IMenu> & {
  Divider: typeof MenuComp.Divider,
  Item: typeof MenuComp.Item,
  ItemGroup: typeof MenuComp.ItemGroup,
  SubMenu: typeof MenuComp.SubMenu,
} = (props) => {

  return (
   <MenuComp {...props}/>
  );
};

Menu.Divider = MenuComp.Divider;
Menu.Item = MenuComp.Item;
Menu.ItemGroup = MenuComp.ItemGroup;
Menu.SubMenu = MenuComp.SubMenu;

export default Menu;

