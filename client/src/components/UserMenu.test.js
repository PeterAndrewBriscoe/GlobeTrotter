import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Navbar';
import UserMenu from './UserMenu'

describe('UserMenu', () => {
    test('it renders a User Menu', () => {
        render(<UserMenu />, { wrapper: MemoryRouter });
        // const UserMenu = screen.queryByRole('navigation');
        expect(UserMenu).toHaveBeenCalled();
    })
})