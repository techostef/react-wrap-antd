import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../Alert';

const nameComponent = 'Alert';

describe('Alert test', () => {
  it(`${nameComponent} render without crash`, async () => {
    const text = 'Alert content';
    render(
      <div>
        <Alert message={text} data-testid="AlertId" />
      </div>
    );

    await screen.findByTestId('AlertId');
  });
})
