import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders hello world heading', () => {
  render(<App />);
  const heading = screen.getByText(/hello, world!/i);
  expect(heading).toBeInTheDocument();
});

test('renders simple message', () => {
  render(<App />);
  const message = screen.getByText(/this is a simple react app/i);
  expect(message).toBeInTheDocument();
});
