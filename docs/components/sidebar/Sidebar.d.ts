import React from 'react';
import "./Sidebar.scss";
interface IMenus {
    id?: string | number;
    content?: any;
    icon?: any;
    children?: IMenus[];
}
interface ISidebar {
    menus: IMenus[];
}
declare const _default: React.NamedExoticComponent<ISidebar>;
export default _default;
