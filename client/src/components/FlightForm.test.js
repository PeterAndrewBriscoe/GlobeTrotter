import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FlightForm from './FlightForm'
import axios from 'axios'
import userEvent from '@testing-library/user-event';
jest.mock('axios')

describe('ListItem', () => {
    beforeEach(() => jest.resetAllMocks())

   
    test('it renders', () => {
        render(<FlightForm />, {wrapper: MemoryRouter})
        const form = screen.getByRole('flight-form');
        expect(form).toBeInTheDocument();
    });
    test('it renders with a textbox', () => {
        render(<FlightForm />, {wrapper: MemoryRouter})
        const textbox = screen.getByRole('textbox');
        expect(textbox).toBeInTheDocument();
    });
    test('it renders with a spinbutton', () => {
        render(<FlightForm />, {wrapper: MemoryRouter})
        const spinbutton = screen.getAllByRole('spinbutton');
        expect(spinbutton).toBeInstanceOf(Array);
    });
    test('it makes a post request', () => {
        render(<FlightForm />, {wrapper: MemoryRouter})
        const submit = screen.getByTestId('submit')
        userEvent.click(submit)
        expect(axios.post).toHaveBeenCalled();
    });
    test('it lets you submit', () => {
        render(<FlightForm />, {wrapper: MemoryRouter})
        const submit = screen.getByTestId('submit')
        userEvent.click(submit)
        expect(axios.post).toHaveBeenCalled();
    });
})