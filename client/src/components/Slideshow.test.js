import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Slideshow from './Slideshow';
import userEvent from '@testing-library/user-event';
import axios from 'axios'
jest.mock('axios')

describe('ResultItem', () => {
    beforeEach(() => jest.resetAllMocks())

   
    test('it renders', () => {
        render(<Slideshow />, {wrapper: MemoryRouter})
        const div = screen.getByRole('div');
        expect(div).toBeInTheDocument();
    });
    test('it renders ', () => {
        // let handleClick = jest.fn()
        render(<Slideshow />, {wrapper: MemoryRouter})
        const clicker = screen.getByTestId('button1');
        userEvent.click(clicker)
        // expect(handleClick).toBeTruthy();
    });

    
})