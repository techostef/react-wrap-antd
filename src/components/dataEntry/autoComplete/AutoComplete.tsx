import React from 'react';
import { AutoComplete as AutoCompleteComp, AutoCompleteProps } from 'antd';

export enum IAutoCompletePlacement {
  bottom = 'bottom',
  top = 'top',
}

interface IAutoComplete extends AutoCompleteProps {
}

const AutoComplete: React.FC<IAutoComplete> = ({children, ...props}) => {

  return (
    <AutoCompleteComp
      {...props}
    >
      { children }
    </AutoCompleteComp>
  );
};

export default React.memo(AutoComplete);

