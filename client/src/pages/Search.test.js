import React from 'react';
import { default as Search } from './Search';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios'

// global.axios = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
//   })
// );


describe('Search', () => {
    let getResultsMock;

    beforeEach(() => {

        getResultsMock = jest.fn(e);
        render(<Search getResults={getResultsMock}/>);
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
        const error = screen.getAllByText('Nothing to see here');
        expect(error).toBeInstanceOf(Array);
    });

    test('it fetches results',()=>{

    })

});