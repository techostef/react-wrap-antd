import React from 'react';
import { render, screen } from '@testing-library/react';
import Upload from '../Upload';

const componentName = 'Upload';

describe('Upload test', () => {
  it(`${componentName} render without crash`, () => {
    render((
      <Upload data-testid="UploadId"/>
    ));

    screen.getByTestId('UploadId');
  });
})
