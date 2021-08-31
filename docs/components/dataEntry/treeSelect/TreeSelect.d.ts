import React from 'react';
import { TreeSelect as TreeSelectComp, TreeSelectProps } from 'antd';
interface ITreeSelect extends TreeSelectProps<any> {
}
declare const TreeSelect: React.FC<ITreeSelect> & {
    TreeNode: typeof TreeSelectComp.TreeNode;
    SHOW_ALL: typeof TreeSelectComp.SHOW_ALL;
    SHOW_PARENT: typeof TreeSelectComp.SHOW_PARENT;
    SHOW_CHILD: typeof TreeSelectComp.SHOW_CHILD;
};
export default TreeSelect;
