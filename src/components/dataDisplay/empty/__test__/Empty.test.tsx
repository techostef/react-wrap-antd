import React from 'react';
import { render, screen } from '@testing-library/react';
import Empty from '../Empty';

const componentName = 'Empty';

describe('Empty test', () => {
  it(`${componentName} render without crash`, () => {
    render((
     <Empty data-testid={'Empty'}/>
    ));
    
    screen.getByTestId('Empty')
  });
})
