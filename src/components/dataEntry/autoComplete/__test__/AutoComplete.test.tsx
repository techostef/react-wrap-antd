import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AutoComplete from '../AutoComplete';

const componentName = 'AutoComplete';

describe('AutoComplete test', () => {
  it(`${componentName} render without crash`, () => {
    const value = 'tesdfaskdjhflka';

    const options = [
      {
        label: 'value',
        value: 'value',
      },
      {
        label: 'value 1',
        value: 'value 1',
      },
      {
        label: 'value 2',
        value: 'value 2',
      },
    ]
    
    render((
      <AutoComplete
        data-testid={'autocomplate'}
        options={options}
        value={value}
      />
    ));

    screen.getByDisplayValue(value);
  });
  
  it(`${componentName} check options exist`, () => {
    const options = [
      {
        label: 'value 1',
        value: 'value 1',
      },
      {
        label: 'value 2',
        value: 'value 2',
      },
      {
        label: 'value 3',
        value: 'value 3',
      },
    ]
    
    render((
      <AutoComplete
        data-testid={'autocomplate'}
        options={options}
      />
    ));

    userEvent.type(screen.getByRole('combobox'), 'value')

    screen.queryAllByText('value 1');
    screen.queryAllByText('value 2');
    screen.queryAllByText('value 3');
  });
})
