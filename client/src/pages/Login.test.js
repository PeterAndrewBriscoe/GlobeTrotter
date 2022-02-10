import React from 'react';
import { default as Login } from './Login';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Login', () => {

    test('it renders Tab', () => {
        render(<Login />, {wrapper: MemoryRouter})
        const login = screen.getAllByRole('clicker');
        expect(login).toBeInstanceOf(Array);
    });
    test('it renders heading', () => {
        render(<Login />, {wrapper: MemoryRouter})
        const login = screen.getAllByRole('heading');
        expect(login[0]).toBeInTheDocument();
    });
    test('it submits a form', () => {
        render(<Login />, {wrapper: MemoryRouter})
        const authUser = jest.fn()
        const submit = screen.getByTestId('submit');
        userEvent.click(submit)
        expect(authUser).toHaveBeenCalled();
    });
    test('it lets you put in a username', () => {
        render(<Login />, {wrapper: MemoryRouter})

        const username = screen.getByTestId('username');
        userEvent.type(username)
        // expect(authUser).toHaveBeenCalled();
    });


});