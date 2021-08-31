import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../Slider';

const componentName = 'Slider';

describe('Slider test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <div data-testid="SliderId">
        <Slider/>
      </div>
    ));

    screen.getByTestId('SliderId');
  });
})
