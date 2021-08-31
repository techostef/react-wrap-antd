import React from 'react';
import { ColProps } from 'antd';
interface ICol extends ColProps {
}
declare const Col: React.FC<ICol>;
export default Col;
