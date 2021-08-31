import React from 'react';
import { TreeSelect as TreeSelectComp, TreeSelectProps } from 'antd';

interface ITreeSelect extends TreeSelectProps<any> {
}

const TreeSelect: React.FC<ITreeSelect> & {
  TreeNode: typeof TreeSelectComp.TreeNode;
  SHOW_ALL: typeof TreeSelectComp.SHOW_ALL;
  SHOW_PARENT: typeof TreeSelectComp.SHOW_PARENT;
  SHOW_CHILD: typeof TreeSelectComp.SHOW_CHILD;
} = ({children, ...props}) => {

  return (
    <TreeSelectComp
      {...props}
    >
      { children }
    </TreeSelectComp>
  );
};


TreeSelect.TreeNode = TreeSelectComp.TreeNode;
TreeSelect.SHOW_ALL = TreeSelectComp.SHOW_ALL;
TreeSelect.SHOW_PARENT = TreeSelectComp.SHOW_PARENT;
TreeSelect.SHOW_CHILD = TreeSelectComp.SHOW_CHILD;

export default TreeSelect;
