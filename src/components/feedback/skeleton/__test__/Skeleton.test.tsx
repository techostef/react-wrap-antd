import React from 'react';
import { render, screen } from '@testing-library/react';
import Skeleton from '../Skeleton';

const nameComponent = 'Result';

describe('Skeleton test', () => {
  it(`${nameComponent} render without crash`, () => {
    render((
      <Skeleton active loading={false} round data-testid="SkeletonId" />
    ));

    screen.findByTestId('SkeletonId');
  });
})
