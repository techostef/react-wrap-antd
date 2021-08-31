import React from 'react';
import { Tree as TreeComp, TreeProps } from 'antd';
interface ITree extends TreeProps {
}
declare const Tree: React.FC<ITree> & {
    TreeNode: typeof TreeComp.TreeNode;
    DirectoryTree: typeof TreeComp.DirectoryTree;
};
export default Tree;
