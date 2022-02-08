import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListItem from './ListItem'
import axios from 'axios'
jest.mock('axios')

describe('ListItem', () => {
    beforeEach(() => jest.resetAllMocks())

   
    test('it renders', () => {
        render(<ListItem />, {wrapper: MemoryRouter})
        const div = screen.getByRole('div');
        expect(div).toBeInTheDocument();
    });
})