---
to: <%= absPath %>/components/<%= category %>/<%= camelName %>/__test__/<%= pascalName %>.test.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import <%= pascalName %> from '../<%= pascalName %>';

const componentName = '<%= pascalName %>';

describe('<%= pascalName %> test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <<%= pascalName %> data-testid="<%= pascalName %>Id"/>
    ));

    screen.getByTestId('<%= pascalName %>Id');
  });
})
