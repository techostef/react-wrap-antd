import React from 'react';
import { Tag as TagComp, TagProps } from 'antd';

interface ITag extends TagProps {
}

const Tag: React.FC<ITag> & {
  CheckableTag: typeof TagComp.CheckableTag
} = ({children, ...props}) => {

  return (
    <TagComp
      {...props}
    >
      { children }
    </TagComp>
  );
};

Tag.CheckableTag = TagComp.CheckableTag;

export default Tag;
