import React from 'react';
import { Breadcrumb as BreadcrumbComp, BreadcrumbProps } from 'antd';
interface IBreadcrumb extends BreadcrumbProps {
}
declare const Breadcrumb: React.FC<IBreadcrumb> & {
    Item: typeof BreadcrumbComp.Item;
    Separator: typeof BreadcrumbComp.Separator;
};
export default Breadcrumb;
