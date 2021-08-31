import React from 'react';
import { Comment as CommentComp, CommentProps } from 'antd';

interface IComment extends CommentProps{}

const Comment: React.FC<IComment> = (props) => {
  return (
    <CommentComp {...props} />
  );
};

export default React.memo(Comment);

