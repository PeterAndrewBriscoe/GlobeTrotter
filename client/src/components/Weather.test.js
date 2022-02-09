import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Weather from './Weather'
import axios from 'axios'
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
        const submit = wrapper.findAllByRole(input)
        submit.simulate('click')
        const results = wrapper.classList.contains('result-grid')
        expect(results).toBeTruthy()
    });
    test('it makes a get request', () => {
        render(<Weather locations={['New York']}  />, {wrapper: MemoryRouter})
        const submit = screen.getByRole('submit')
        userEvent.click(submit)
        expect(axios.get).toHaveBeenCalled();
    });

})