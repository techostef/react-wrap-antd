/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import argTypesEnum from '../../../../enums/argTypesEnum';
import Pagination, { PaginationSize } from '../Pagination';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {
    size: argTypesEnum.RADIO({
      current: argTypesEnum.NUMBER,
      className: argTypesEnum.STRING,
      dataTestId: argTypesEnum.STRING,
      defaultCurrent: argTypesEnum.NUMBER,
      defaultPageSize: argTypesEnum.NUMBER,
      defaultValue: PaginationSize.default,
      disabled: argTypesEnum.BOOL_FALSE,
      hideOnSinglePage: argTypesEnum.BOOL_FALSE,
      itemRender: argTypesEnum.EVENTS,
      options: PaginationSize,
      onChange: argTypesEnum.EVENTS,
      onShowSizeChange: argTypesEnum.EVENTS,
      pageSize: argTypesEnum.NUMBER,
      pageSizeOptions: argTypesEnum.ARRAY,
      responsive: argTypesEnum.BOOL_FALSE,
      showLessItems: argTypesEnum.BOOL_FALSE,
      showQuickJumper: null,
      showSizeChanger: argTypesEnum.BOOL_FALSE,
      showTitle: argTypesEnum.BOOL_TRUE,
      showTotal: argTypesEnum.EVENTS,
      simple: argTypesEnum.BOOL_FALSE,
      size: null,
      total: argTypesEnum.NUMBER,
    }),
  },
};

const TemplateDefault = ({...args}) => (
  <Pagination
    {...args}
  />
);

const TemplateWithState = () =>{
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(200);
  
  const handleOnShowSizeChange = (current, size) => {
    console.log(current, size);
    setTotalPage(size);
    setCurrentPage(current);
  }
  
  return(
    <Pagination
      defaultCurrent={currentPage}
      total={totalPage}
      onShowSizeChange={handleOnShowSizeChange}
    />
  )
};

export const PaginationBasic = TemplateDefault.bind({});
PaginationBasic.args = {
  current: 2,
  defaultCurrent: 1,
  pageSize: 15,
  showSizeChanger: false,
  total: 45,
};

export const PaginationWithQuickJumper = TemplateDefault.bind({});
PaginationWithQuickJumper.args = {
  current: 2,
  showQuickJumper: true,
  pageSize: 10,
  total: 500,
  pageSizeOptions: ['10', '30', '50', '100'],
};

export const PaginationMiniSize = TemplateDefault.bind({});
PaginationMiniSize.args = {
  current: 2,
  showQuickJumper: true,
  pageSize: 10,
  size: PaginationSize.small,
  total: 500,
};

export const PaginationSimple = TemplateDefault.bind({});
PaginationSimple.args = {
  current: 2,
  simple: true,
  pageSize: 10,
  total: 500,
};

export const PaginationWithTotalItem = TemplateDefault.bind({});
PaginationWithTotalItem.args = {
  current: 2,
  pageSize: 10,
  showTotal: total => `Total ${total} items`,
  total: 500,
};

export const PaginationWithTotalAndRangeItem = TemplateDefault.bind({});
PaginationWithTotalAndRangeItem.args = {
  current: 2,
  pageSize: 10,
  showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  total: 500,
};

export const PaginationWithAllShowProps = TemplateDefault.bind({});
PaginationWithAllShowProps.args = {
  current: 2,
  pageSize: 10,
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: total => `Total ${total} items`,
  total: 500,
};

export const PaginationWithPrevAndNextButton = TemplateDefault.bind({});
PaginationWithPrevAndNextButton.args = {
  current: 2,
  pageSize: 10,
  total: 500,
}

export const PaginationActionChange = TemplateWithState.bind({});
