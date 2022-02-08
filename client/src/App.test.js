import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />, {wrapper: MemoryRouter});
  const heading = screen.getByText(/Globe Trotters/i);
  expect(heading).toBeInTheDocument();
});
