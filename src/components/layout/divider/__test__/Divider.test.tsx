import React from 'react';
import { render, screen } from '@testing-library/react';
import Divider from '../Divider';

const nameComponent = 'Divider';

describe('Divider test', () => {
  it(`${nameComponent} render without crash`, () => {
    const text = 'Divider text';
    render((
      <Divider data-testid="DividerId">
        { text }
      </Divider>
    ));

    screen.getByTestId('DividerId');
  });
})
