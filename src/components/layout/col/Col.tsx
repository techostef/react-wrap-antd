import React from 'react';
import { Col as ColComp, ColProps } from 'antd';

interface ICol extends ColProps {};

const Col: React.FC<ICol> = (props) => {
  return (
    <ColComp {...props} />
  )
}

export default Col;