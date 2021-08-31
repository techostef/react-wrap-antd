import React from 'react';
import { DrawerProps } from 'antd';
export declare enum DrawerPlacement {
    top = "top",
    bottom = "bottom",
    right = "right",
    left = "left"
}
interface IDrawer extends DrawerProps {
}
declare const Drawer: React.FC<IDrawer>;
export default Drawer;
