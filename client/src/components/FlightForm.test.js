import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FlightForm from './FlightForm'
import axios from 'axios'
jest.mock('axios')

describe('Weather', () => {
    beforeEach(() => jest.resetAllMocks())

   
    test('it renders', () => {
        render(<FlightForm />, {wrapper: MemoryRouter})
        const form = screen.getByRole('flight-form');
        expect(form).toBeInTheDocument();
    });
})