import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../Image';

const componentName = 'Image';

describe('Image test', () => {
  it(`${componentName} render without crash`, () => {
    
    render((
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        data-testid={'Image'}
      />
    ));
    
    screen.getByTestId('Image')
  });
})
