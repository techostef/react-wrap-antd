import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from '../Tag';

const componentName = 'Tag';

describe('Tag test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Tag data-testid="TagId"/>
    ));

    screen.getByTestId('TagId');
  });
})
