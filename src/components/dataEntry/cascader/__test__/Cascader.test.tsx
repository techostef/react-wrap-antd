import React from 'react';
import { render, screen } from '@testing-library/react';
import Cascader from '../Cascader';

const componentName = 'Cascader';

describe('Cascader test', () => {
  it(`${componentName} render without crash`, () => {
    
    render((
      <Cascader data-testid="cascaderid" options={[]}/>
    ));

    screen.getByTestId('cascaderid');
  });
})
