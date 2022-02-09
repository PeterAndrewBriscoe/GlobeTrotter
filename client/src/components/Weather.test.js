import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Weather from './Weather'
import axios from 'axios'
import userEvent from '@testing-library/user-event';
jest.mock('axios')

describe('Weather', () => {
    beforeEach(() => jest.resetAllMocks())

    const stubUrl = `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=9ae001f74dac4f0ebfc105001220702&q=paris&format=json&date=2021-01-01&enddate=2021-01-28`

    test('it renders', () => {
        render(<Weather locations={['New York']} />, {wrapper: MemoryRouter})
        const div = screen.getByRole('weather');
        expect(div).toBeInTheDocument();
    });

    test('it gets temperatures on submit', () => {
        const wrapper = render(<Weather locations={['New York']} />, { wrapper: MemoryRouter })
        const checkbox = screen.getByRole('tempbox')
        userEvent.click(checkbox)
        const submit = screen.getByRole('form')
        userEvent.click(submit)
        const results = wrapper.classList.contains('result-grid')
        expect(results).toBeTruthy()
    });
    test('it has a checkbox', () => {
        const wrapper = render(<Weather locations={['New York']} />, { wrapper: MemoryRouter })
        const submit = wrapper.findByRole('checkbox')
        fireEvent.click(submit)
        const results = wrapper.classList.contains('result-grid')
        expect(results).toBeTruthy()
    });
    test('it makes a get request', () => {
        render(<Weather locations={['New York']}  />, {wrapper: MemoryRouter})
        const checkbox = screen.getByRole('tempbox')
        userEvent.click(checkbox)
        const submit = screen.getByRole('submit')
        userEvent.click(submit)
        expect(axios.get).toHaveBeenCalled();
    });
    test('it calls get temp when form is submitted', () => {
        render(<Weather locations={['New York']}  />, {wrapper: MemoryRouter})
        const checkbox = screen.getByRole('tempbox')
        userEvent.click(checkbox)
        const submit = screen.getByRole('submit')
        const event = userEvent.click(submit)
        expect(mockCallback.mock.calls.length).toBe(1);
    })
    test('it changes month', () => {
        render(<Weather locations={['New York']}  />, {wrapper: MemoryRouter})
        const checkbox = screen.getByRole('tempbox')
        userEvent.click(checkbox)
        const month =screen.getByRole('month')
        const january = screen.getByRole('january')
        fireEvent.change(month, {target : { value: january}})
        // expect(mockCallback.mock.calls.length).toBe(1);
    })

})