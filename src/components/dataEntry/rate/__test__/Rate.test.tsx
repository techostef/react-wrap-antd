import React from 'react';
import { render, screen } from '@testing-library/react';
import Rate from '../Rate';

const componentName = 'Rate';

describe('Rate test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <div data-testid="RateId">
        <Rate/>
      </div>
    ));

    screen.getByTestId('RateId');
  });
})
