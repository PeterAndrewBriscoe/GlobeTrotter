import React from 'react';
import { default as Login } from './Login';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Login', () => {

    test('it renders', () => {
        render(<Login />, {wrapper: MemoryRouter})
        const login = screen.getByRole('Login');
        const confPassword = screen.getByRole('confPassword')
        expect(login).toBeInTheDocument();
        expect(confPassword).toBeInTheDocument();
    });

});