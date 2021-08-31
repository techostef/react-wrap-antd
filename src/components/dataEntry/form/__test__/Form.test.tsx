import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../Form';

const componentName = 'Form';

describe('Form test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Form data-testid="FormId"/>
    ));

    screen.getByTestId('FormId');
  });
})
