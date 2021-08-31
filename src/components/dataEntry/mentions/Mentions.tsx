import React from 'react';
import { Mentions as MentionsComp, MentionProps } from 'antd';

interface IMentions extends MentionProps {
}

const Mentions: React.FC<IMentions> & {
  Option: typeof MentionsComp.Option;
  getMentions: typeof MentionsComp.getMentions;
} = ({children, ...props}) => {

  return (
    <MentionsComp
      {...props}
    >
      { children }
    </MentionsComp>
  );
};

Mentions.Option = MentionsComp.Option;
Mentions.getMentions = MentionsComp.getMentions;

export default Mentions;
