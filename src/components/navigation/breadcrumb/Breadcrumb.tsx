import React from 'react';
import { Breadcrumb as BreadcrumbComp, BreadcrumbProps } from 'antd';

interface IBreadcrumb extends BreadcrumbProps{}

const Breadcrumb: React.FC<IBreadcrumb> & {
  Item: typeof BreadcrumbComp.Item,
  Separator: typeof BreadcrumbComp.Separator,
} = (props) => {
  return (
    <BreadcrumbComp {...props}/>
  );
};

Breadcrumb.Item = BreadcrumbComp.Item
Breadcrumb.Separator = BreadcrumbComp.Separator

export default Breadcrumb;

