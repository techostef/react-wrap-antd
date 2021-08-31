import React from 'react';
import { PageHeader as PageHeaderComp, PageHeaderProps } from 'antd';
import "./PageHeader.scss";

interface IPageHeader extends PageHeaderProps{}

const PageHeader: React.FC<IPageHeader> = (props) => {
  return (
   <PageHeaderComp {...props} />
  );
};

export default React.memo(PageHeader);

