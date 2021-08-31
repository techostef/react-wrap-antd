import React from 'react';
import { Menu as MenuComp, MenuProps } from 'antd';
export declare enum MenuMode {
    horizontal = "horizontal",
    inline = "inline",
    vertical = "vertical"
}
export declare enum MenuTheme {
    dark = "dark",
    light = "light"
}
export declare enum MenuTriggerSubMenuAction {
    click = "click",
    hover = "hover"
}
interface IMenu extends MenuProps {
}
declare const Menu: React.FC<IMenu> & {
    Divider: typeof MenuComp.Divider;
    Item: typeof MenuComp.Item;
    ItemGroup: typeof MenuComp.ItemGroup;
    SubMenu: typeof MenuComp.SubMenu;
};
export default Menu;
