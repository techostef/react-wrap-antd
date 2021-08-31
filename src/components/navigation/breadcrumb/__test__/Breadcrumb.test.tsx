import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from '../Breadcrumb';

const componentName = 'Breadcrumb';

describe('Breadcrumb test', () => {
    it(`${componentName} render without crash`, () => {
      
      render((
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
      ));
    });
  })