import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

const nameComponent = 'ToggleButton';

describe('Button test', () => {
    it(`${nameComponent} render without crash`, () => {
        const text = 'tesdfaskdjhflka  asdfkasdf';
       
        render((
            <Button>
                { text }
            </Button>
        ));
    });

    it(`${nameComponent} event onChange`, () => {
        let value = true;
        const valueExpect = false;
    
        const onClick = () => {
            value = valueExpect;
        }
       
        render((
            <Button
                onClick={onClick}
            >
                text
            </Button>
        ));
    
        userEvent.click(screen.getByText('text'));
    
        expect(valueExpect).toBe(value);
    });
})
