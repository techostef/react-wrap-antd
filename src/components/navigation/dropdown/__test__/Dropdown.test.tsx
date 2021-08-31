import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '../../menu/Menu';
import Dropdown from '../Dropdown';

const componentName = 'Dropdown';

describe('Dropdown test', () => {
    it(`${componentName} render without crash`, () => {
        
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                  1st menu item
                </a>
              </Menu.Item>
            </Menu>
        );
        
        render((
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me
                </a>
            </Dropdown>
        ));
    });
})
