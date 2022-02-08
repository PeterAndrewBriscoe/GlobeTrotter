import React from 'react';
import { default as Detail } from './Detail';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Detail', () => {

    test('it renders', () => {
        render(<Detail />, {wrapper: MemoryRouter})
        const div = screen.getByRole('div');
        expect(div).toBeInTheDocument();
    });

});