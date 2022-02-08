import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';



const TestProviders = ({  }) => {

    return ({ children }) => (
        <Provider>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

import axios from 'axios';
jest.mock('axios')
axios.get.mockResolvedValue({ data: [ { latlng: [123, 456] }]})

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;