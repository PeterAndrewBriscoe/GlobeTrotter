import React from 'react';
import { default as Search } from './Search';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios'

describe('Search', () => {
    let getResultMock;

    beforeEach(() => {
        getResultMock = jest.fn();
        render(<Search getResult={getResultMock}/>);
    });

    test('it renders', () => {
        renderWithReduxProvider(<Search />, {wrapper: MemoryRouter})
        const heading = screen.getAllByText('Welcome');
        expect(heading).toBeInstanceOf(Array);
    });
    test('there are different categories to call from', () => {
        renderWithReduxProvider(<Search />, {wrapper: MemoryRouter})
        const Art = screen.getAllByText('Art');
        const Beaches = screen.getAllByText('Beaches');
        const Cuisine = screen.getAllByText('Cuisine');
        const Golf = screen.getAllByText('Golf');
        const Museums = screen.getAllByText('Museums');
        const Skiing = screen.getAllByText('Skiing');
        const Hiking = screen.getAllByText('Hiking');
        expect(Art).toBeInstanceOf(Array);
        expect(Beaches).toBeInstanceOf(Array);
        expect(Cuisine).toBeInstanceOf(Array);
        expect(Golf).toBeInstanceOf(Array);
        expect(Museums).toBeInstanceOf(Array);
        expect(Skiing).toBeInstanceOf(Array);
        expect(Hiking).toBeInstanceOf(Array);
    });
    
    test('it tells you when there are no results', () => {
        renderWithReduxProvider(<Search />, {wrapper: MemoryRouter})
        const error = screen.getAllByText('No Results to Show');
        expect(error).toBeInstanceOf(Array);
    });
    test('it makes a get request', () => {
        render(<Search />, {wrapper: MemoryRouter})
        // const submit = screen.getByRole('submit')
        // userEvent.click(submit)
        expect(axios.get).toHaveBeenCalled();
    });
    test('it renders with nightlife category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const nightlife = checkbox[7]
        await userEvent.click(nightlife)
        let slider =  screen.getByTestId("nightlifeValue")
        expect(slider).toBeInTheDocument()
    });

});