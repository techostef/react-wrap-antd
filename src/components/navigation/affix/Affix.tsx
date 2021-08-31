import React from 'react';
import {Affix as AffixComp, AffixProps} from 'antd'

interface IAffix extends AffixProps {}

const Affix: React.FC<IAffix> = (props) => {

  return (
    <AffixComp {...props}/>
  );
};

export default React.memo(Affix);

