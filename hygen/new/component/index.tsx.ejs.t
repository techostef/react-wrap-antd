---
to: <%= absPath %>/components/<%= category %>/<%= camelName %>/<%= pascalName %>.tsx
---
import React from 'react';
import { <%= pascalName %> as <%= pascalName %>Comp, <%= pascalName %>Props } from 'antd';

interface I<%= pascalName %> extends <%= pascalName %>Props {
}

const <%= pascalName %>: React.FC<I<%= pascalName %>> = ({children, ...props}) => {

  return (
    <<%= pascalName %>Comp
      {...props}
    >
      { children }
    </<%= pascalName %>Comp>
  );
};

export default React.memo(<%= pascalName %>);
