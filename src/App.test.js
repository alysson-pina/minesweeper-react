import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title with logo', () => {
  render(<App />);
  const title = screen.getByText(/Modern React Minesweeper/i);
  const logo = screen.getByRole('img');

  expect(title).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
