import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders spacex', () => {
  render(<App />);
  const linkElement = screen.getByText(/SpaceX/i);
  expect(linkElement).toBeInTheDocument();
});
