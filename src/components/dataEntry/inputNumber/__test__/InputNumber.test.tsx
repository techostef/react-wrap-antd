import React from 'react';
import { render, screen } from '@testing-library/react';
import InputNumber from '../InputNumber';

const componentName = 'InputNumber';

describe('InputNumber test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <InputNumber data-testid="InputNumberId"/>
    ));

    screen.getByTestId('InputNumberId');
  });
})
