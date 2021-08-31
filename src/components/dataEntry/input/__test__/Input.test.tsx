import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../Input';

const componentName = 'Input';

describe('Input test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Input data-testid="InputId"/>
    ));

    screen.getByTestId('InputId');
  });
})
