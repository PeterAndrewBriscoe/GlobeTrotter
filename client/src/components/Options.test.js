import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Options from './Options';
import userEvent from '@testing-library/user-event';
import axios from 'axios'
jest.mock('axios')

describe('Options', () => {
    beforeEach(() => jest.resetAllMocks())


   
    test('it renders', () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const form = screen.getByRole("option-form");
        expect(form).toBeInTheDocument();
    });
    test('it with categories', () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const beaches = screen.getByText('Beaches')
        expect(beaches).toBeInTheDocument();
    });
    test('it renders with art category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const art = checkbox[0]
        await userEvent.click(art)
        let slider =  screen.getByTestId("artValue")
        expect(slider).toBeInTheDocument()
    });
    test('it renders with beach category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const beaches = checkbox[1]
        await userEvent.click(beaches)
        let slider =  screen.getByTestId("beachesValue")
        expect(slider).toBeInTheDocument()
    });
    test('it renders with cuisine category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const cuisine = checkbox[2]
        await userEvent.click(cuisine)
        let slider =  screen.getByTestId("cuisineValue")
        expect(slider).toBeInTheDocument()
    });
    test('it renders with golf category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const golf = checkbox[3]
        await userEvent.click(golf)
        let slider =  screen.getByTestId("golfValue")
        expect(slider).toBeInTheDocument()
    });
    test('it renders with museums category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const golf = checkbox[4]
        await userEvent.click(golf)
        let slider =  screen.getByTestId("museumsValue")
        expect(slider).toBeInTheDocument()
    });
    test('it renders with skiing category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const skiing = checkbox[5]
        await userEvent.click(skiing)
        let slider =  screen.getByTestId("skiingValue")
        expect(slider).toBeInTheDocument()
    });
    test('it renders with hiking category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const hiking = checkbox[6]
        await userEvent.click(hiking)
        let slider =  screen.getByTestId("hikingValue")
        expect(slider).toBeInTheDocument()
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
    test('it renders with nightlife category', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const nightlife = checkbox[7]
        await userEvent.click(nightlife)
        let submit =  screen.getByRole("submitbtn")
        userEvent.click(submit)
        expect(submit).toBeInTheDocument()
    });
    test('it has sliders', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const nightlife = checkbox[7]
        await userEvent.click(nightlife)
        let slider =  screen.getByTestId("nightlifeValue")
        fireEvent.change(slider, {target: {value: 7}})
        expect(slider).toBeInTheDocument()
    });
    test('it has sliders', async () => {
        let getResults= jest.fn()
        render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
        const checkbox = screen.getAllByRole('checkbox')
        const hiking = checkbox[6]
        await userEvent.click(hiking)
        let slider =  screen.getByTestId("hikingValue")
        fireEvent.change(slider, {target: {value: 7}})
        expect(slider).toBeInTheDocument()
    });
    
    // test('it calls getResults when submitted', () => {
    //     render(<Options getResults={getResults} />, {wrapper: MemoryRouter})
    //     // const getTemperatures = jest.fn()
    //     const submit = screen.getByRole('submitbtn')
    //     const checkbox = screen.getAllByRole('checkbox')
    //     const nightlife = checkbox[7]
    //     await userEvent.click(nightlife)
    //     userEvent.click(submit)

    //     // expect(getTemperatures(submit)).toHaveBeenCalled();
    // })
})