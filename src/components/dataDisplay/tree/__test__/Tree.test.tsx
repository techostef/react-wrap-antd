import React from 'react';
import { render, screen } from '@testing-library/react';
import Tree from '../Tree';

const componentName = 'Tree';

describe('Tree test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Tree data-testid="TreeId"/>
    ));

    screen.getByTestId('TreeId');
  });
})
