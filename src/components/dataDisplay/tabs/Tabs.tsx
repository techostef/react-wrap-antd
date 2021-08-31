import React from 'react';
import { Tabs as TabsComp, TabsProps } from 'antd';

interface ITabs extends TabsProps {
}

const Tabs: React.FC<ITabs> & {
  TabPane: typeof TabsComp.TabPane,
} = ({children, ...props}) => {

  return (
    <TabsComp
      {...props}
    >
      { children }
    </TabsComp>
  );
};

Tabs.TabPane = TabsComp.TabPane;

export default Tabs;
