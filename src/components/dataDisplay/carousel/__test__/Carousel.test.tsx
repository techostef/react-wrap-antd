import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from '../Carousel';

const componentName = 'Carousel';

describe('Carousel test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <div data-testid={'Carousel'}>
        <Carousel>
          <div>
            <h3>1</h3>
          </div>
        </Carousel>
      </div>
    ));
    
    screen.getByTestId('Carousel')
  });
})
