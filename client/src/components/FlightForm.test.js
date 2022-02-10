import { screen, render, fireEvent } from '@testing-library/react';
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
        const textbox = screen.getByTestId('form');
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
        expect(axios.post).toBeTruthy()
    });
    test('it lets you submit', () => {
        const onSubmit = jest.fn();
        render(<FlightForm onSubmit={getA}/>, {wrapper: MemoryRouter})
        const getAirports = jest.fn()
        const flight_form = screen.getByRole('flight-form')
        const submit = screen.getByTestId('submit')
        const textbox = screen.getByTestId('form');
        const outboundDate = screen.getByTestId('outboundDate');
        const returnDate = screen.getByTestId('returnDate');
        const adults = screen.getByTestId('adults');
        fireEvent.change(textbox, "London")
        fireEvent.change(adults, 2)
        fireEvent.change(outboundDate, { target: { value: '2022-02-20' } });
        fireEvent.change(returnDate, { target: { value: '2022-02-24' } });
        fireEvent.submit(flight_form);
        expect(onSubmit).toHaveBeenCalledTimes(0)
        expect(getAirports).toHaveBeenCalledTimes(0);
    });
    test('it requires you to tell it a from flight', () => {
        render(<FlightForm />, {wrapper: MemoryRouter})
        const from = screen.getByTestId('form')
        expect(from).toBeInTheDocument()
    });
    test('it renders potential airports when the relevant lists exist', () => {
        render(<FlightForm />, {wrapper: MemoryRouter})
        const origins = ["LHR"]
        const destinations = ["LAX"]
        const originList = screen.getByTestId('potential-origins')
        expect(originList).toBeTruthy()
        const destinationList = screen.getByTestId('potential-destinations')
        expect(destinationList).toBeTruthy()
    });

})