import React from 'react';
import { render, screen } from '@testing-library/react';
import Statistic from '../Statistic';

const componentName = 'Statistic';

describe('Statistic test', () => {
  it(`${componentName} render without crash`, () => {
    
    render((
      <div data-testid={'Statistic'}>
        <Statistic title="Active Users" value={112893} />
      </div>
    ));
    
    screen.getByTestId('Statistic');
  });
})
