import React from 'react';
import { Tabs as TabsComp, TabsProps } from 'antd';
interface ITabs extends TabsProps {
}
declare const Tabs: React.FC<ITabs> & {
    TabPane: typeof TabsComp.TabPane;
};
export default Tabs;
