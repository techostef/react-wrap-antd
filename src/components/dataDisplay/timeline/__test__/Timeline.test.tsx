import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from '../Timeline';

const componentName = 'Timeline';

describe('Timeline test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Timeline data-testid="TimelineId"/>
    ));

    screen.getByTestId('TimelineId');
  });
})
