import React from 'react';
import { render, screen } from '@testing-library/react';
import Drawer from '../Drawer';

const nameComponent = 'Drawer';

describe('Drawer test', () => {
  it(`${nameComponent} render without crash`, async () => {
    const content = 'Drawer content';
    render(
      <div>
        <Drawer visible title="Test drawer" data-testid="DrawerId">
          {content}
        </Drawer>
      </div>
    );

    await screen.findByTestId('DrawerId');
  });
})
