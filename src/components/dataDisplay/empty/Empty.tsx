import React from 'react';
import { Empty as EmptyComp, EmptyProps } from 'antd';

interface IEmpty extends EmptyProps{}

const Empty: React.FC<IEmpty> = (props) => {
  return (
   <EmptyComp {...props} />
  );
};

export default React.memo(Empty);

