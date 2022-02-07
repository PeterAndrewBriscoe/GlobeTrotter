import React from 'react';
import { default as History } from './History';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('History', () => {

    test('it renders', () => {
        renderWithReduxProvider(<History />, {wrapper: MemoryRouter})
        const heading = screen.getByText('History');
        expect(heading).toBeInTheDocument();
    });

});