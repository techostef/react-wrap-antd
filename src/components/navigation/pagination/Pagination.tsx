import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Pagination as PaginationComp , PaginationProps }from 'antd';

export enum PaginationSize {
  default = 'default',
  small = 'small',
}

interface IPagination extends PaginationProps{}

const Pagination: React.FC<IPagination> = (props) => {
  
  return (
    <PaginationComp 
     {...props}
    />
  );
};

export default React.memo(Pagination);

