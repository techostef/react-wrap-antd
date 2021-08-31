import React from 'react';
import { render, screen } from '@testing-library/react';
import Radio from '../Radio';

const componentName = 'Radio';

describe('Radio test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Radio data-testid="RadioId"/>
    ));

    screen.getByTestId('RadioId');
  });
})
