import React from 'react';
import { Mentions as MentionsComp, MentionProps } from 'antd';
interface IMentions extends MentionProps {
}
declare const Mentions: React.FC<IMentions> & {
    Option: typeof MentionsComp.Option;
    getMentions: typeof MentionsComp.getMentions;
};
export default Mentions;
