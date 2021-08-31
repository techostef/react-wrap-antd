import React from 'react';
import { render, screen } from '@testing-library/react';
import Spin from '../Spin';

const nameComponent = 'Result';

describe('Spin test', () => {
  it(`${nameComponent} render without crash`, () => {
    render((
      <Spin spinning size="large" tip="Loading" data-testid="SpinId" />
    ));

    screen.getByTestId('SpinId');
  });
})
