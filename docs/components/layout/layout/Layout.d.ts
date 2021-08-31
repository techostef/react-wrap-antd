import React from 'react';
import { Layout as LayoutComp, LayoutProps } from 'antd';
interface ILayout extends LayoutProps {
}
declare const Layout: React.FC<ILayout> & {
    Header: typeof LayoutComp.Header;
    Sider: typeof LayoutComp.Sider;
    Content: typeof LayoutComp.Content;
    Footer: typeof LayoutComp.Footer;
};
export default Layout;
