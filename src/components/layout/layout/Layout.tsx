import React from 'react';
import { Layout as LayoutComp, LayoutProps } from 'antd';

interface ILayout extends LayoutProps {}

const Layout: React.FC<ILayout> & {
  Header: typeof LayoutComp.Header,
  Sider: typeof LayoutComp.Sider,
  Content: typeof LayoutComp.Content,
  Footer: typeof LayoutComp.Footer
} = (props) => {
  return (
    <LayoutComp
      {...props}
    />
  )
}

Layout.Header = LayoutComp.Header;
Layout.Sider = LayoutComp.Sider;
Layout.Content = LayoutComp.Content;
Layout.Footer = LayoutComp.Footer;

export default Layout;