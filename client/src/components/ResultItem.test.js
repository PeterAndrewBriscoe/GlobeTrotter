import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResultItem from './ResultItem';
import userEvent from '@testing-library/user-event';
import axios from 'axios'
jest.mock('axios')

describe('ResultItem', () => {
    beforeEach(() => jest.resetAllMocks())

   
    test('it renders', () => {
        render(<ResultItem location={'New York'}/>, {wrapper: MemoryRouter})
        const div = screen.getByRole('div');
        expect(div).toBeInTheDocument();
    });
       
    test('it lets you click ', () => {
        let handleClick= onclick
        render(<ResultItem location={'New York'}/>, {wrapper: MemoryRouter})
        const clicker = screen.getByRole('clicker');
        userEvent.click(clicker)
        expect(handleClick).toBeTruthy();
    });
    
})