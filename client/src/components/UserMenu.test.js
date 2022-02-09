import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Navbar';
import UserMenu from './UserMenu';
import userEvent from '@testing-library/user-event';
import {shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
configure({ adapter: new Adapter() });

describe('UserMenu', () => {
    test('it renders a User Menu', () => {
        render(<UserMenu />, { wrapper: MemoryRouter });
        // const UserMenu = screen.queryByRole('navigation');
        expect(UserMenu).toHaveBeenCalled();
    })
    test('it renders a menu',()=>{
        render(<UserMenu />, { wrapper: MemoryRouter });
        const menuItem = screen.getAllByRole('menu-item')
        expect(menuItem).toBeInstanceOf(Array) 
    })
    test('there is a hide button', () => {
        render(<UserMenu />, { wrapper: MemoryRouter });
        const hide = screen.getByTestId('hide')
        userEvent.click(hide)
        const menuItem = screen.getByTestId('historyButton')
        expect(menuItem).toBeInTheDocument()
    });
    test('the button calls a function when clicked', () => {
        render(<UserMenu />, { wrapper: MemoryRouter });
        let handleLogout = jest.fn()
        const hide = screen.getByTestId('hide')
        userEvent.click(hide)
        const menuItem = screen.getByTestId('historyButton')
        userEvent.click(menuItem)
        expect(handleLogout).toBeCalled()
    });
    test('their is a logout button', () => {
        render(<UserMenu/>, { wrapper: MemoryRouter });
        let handleLogout = jest.fn()
        const menuItem = screen.getByRole('Logout')
        menuItem.simulate('click')
        expect(handleLogout).toBeCalled()
    });
})