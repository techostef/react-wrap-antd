import React from 'react';
import { render, screen } from '@testing-library/react';
import Affix from '../Affix';

const componentName = 'Affix';

describe('Affix test', () => {
  it(`${componentName} render without crash`, () => {
    const text = 'tesdfaskdjhflka  asdfkasdf';
    
    render((
      <Affix>
        { text }
      </Affix>
    ));
  });
})
