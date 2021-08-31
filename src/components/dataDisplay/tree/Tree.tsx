import React from 'react';
import { Tree as TreeComp, TreeProps } from 'antd';

interface ITree extends TreeProps {
}

const Tree: React.FC<ITree> & {
  TreeNode: typeof TreeComp.TreeNode;
  DirectoryTree: typeof TreeComp.DirectoryTree;
} = ({children, ...props}) => {

  return (
    <TreeComp
      {...props}
    >
      { children }
    </TreeComp>
  );
};

Tree.TreeNode = TreeComp.TreeNode;
Tree.DirectoryTree = TreeComp.DirectoryTree;

export default Tree;
