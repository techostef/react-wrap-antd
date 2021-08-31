import React from 'react';
import { render, screen } from '@testing-library/react';
import Mentions from '../Mentions';

const componentName = 'Mentions';

describe('Mentions test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Mentions data-testid="MentionsId"/>
    ));

    screen.getByTestId('MentionsId');
  });
})
