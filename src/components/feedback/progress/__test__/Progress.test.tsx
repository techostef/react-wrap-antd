import React from 'react';
import { render, screen } from '@testing-library/react';
import Progress from '../Progress';

const nameComponent = 'Progress';

describe('Progress test', () => {
  it(`${nameComponent} render without crash`, () => {
    render(
      <Progress
        percent={30}
        type="line"
        data-testid="ProgressId"
      />
    );

    screen.getByTestId('ProgressId');
  });
})
