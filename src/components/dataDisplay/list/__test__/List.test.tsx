import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../List';
import { Typography } from 'antd';

const componentName = 'List';

describe('Image test', () => {
    it(`${componentName} render without crash`, () => {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
        
      render((
        <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            data-testid={'List'}
            bordered
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
        )}
        />
      ));
      
      screen.getByTestId('List')
    });
  })
