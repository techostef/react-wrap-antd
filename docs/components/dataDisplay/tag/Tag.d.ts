import React from 'react';
import { Tag as TagComp, TagProps } from 'antd';
interface ITag extends TagProps {
}
declare const Tag: React.FC<ITag> & {
    CheckableTag: typeof TagComp.CheckableTag;
};
export default Tag;
