import React from 'react';
import Options, { art, beaches, cuisine, golf, museums, skiing, hiking } from './Options';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { click } from '@testing-library/user-event/dist/click';

describe('SearchForm', () => {
    let getResultMock;
    let handleCheckMock;

    beforeEach(() => {
        getResultMock = jest.fn();
        handleCheckMock = jest.fn();
        jest.resetAllMocks;
        render(<Options getResult={getResultMock}/>);
    });

    test('it renders several inputs', () => {
        let form = screen.getAllByRole('checkbox');
        expect(form).toBeInstanceOf(Array);;
    });
    // test('all categories start of false', ()=>{
    //     expect(!art).toBeTruthy();
    //     expect(!cuisine).toBeTruthy();
    //     expect(!beaches).toBeTruthy();
    //     expect(!golf).toBeTruthy();
    //     expect(!museums).toBeTruthy();
    //     expect(!skiing).toBeTruthy();
    //     expect(!hiking).toBeTruthy();
    // })
    test('categories change truth values on click', ()=>{
        let art = screen.find('[htmlFor="checkbox"]').at(1)
        // let art = checkbox.at(1)
        userEvent.type(art, click)
        expect(handleCheckMock).toHaveBeenCalled()
    })
    test('it renders with a disabled button', ()=>{
        let button = screen.find('[htmlFor="submit"]')
        expect(button).toBe(isDisabled)
    })
})