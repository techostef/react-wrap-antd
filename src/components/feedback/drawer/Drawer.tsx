import React from 'react';
import { Drawer as DrawerComp, DrawerProps } from 'antd';

export enum DrawerPlacement {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
};

interface IDrawer extends DrawerProps {}

const Drawer: React.FC<IDrawer> = (props) => {
  return (
    <DrawerComp
      {...props}
    />
  )
}

export default Drawer;

