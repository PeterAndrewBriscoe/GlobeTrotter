import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Tab from './Tab'
import axios from 'axios'
jest.mock('axios')

describe('Tab', () => {
    beforeEach(() => jest.resetAllMocks())

   
    test('it renders', () => {
        render(<Tab />, {wrapper: MemoryRouter})
        const title = screen.getByRole('h3');
        expect(title).toBeInTheDocument();
    });
})