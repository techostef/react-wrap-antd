import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeSelect from '../TreeSelect';

const componentName = 'TreeSelect';

describe('TreeSelect test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <TreeSelect data-testid="TreeSelectId"/>
    ));

    screen.getByTestId('TreeSelectId');
  });
})
