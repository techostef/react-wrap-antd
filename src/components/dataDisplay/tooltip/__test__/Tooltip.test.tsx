import React from 'react';
import { render, screen } from '@testing-library/react';
import Tooltip from '../Tooltip';

const componentName = 'Tooltip';

describe('Tooltip test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <div data-testid="TooltipId">
        <Tooltip title="Prop type">
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </div>
    ));

    screen.getByTestId('TooltipId');
  });
})
