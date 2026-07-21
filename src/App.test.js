import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // jsdom doesn't implement these browser APIs used by the page
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  Element.prototype.scrollIntoView = jest.fn();
});

test('renders the main sections', () => {
  render(<App />);
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Projects')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});

test('renders projects from the data file', () => {
  render(<App />);
  expect(screen.getByText('Fly Fall')).toBeInTheDocument();
  expect(screen.getByText('My Benefits')).toBeInTheDocument();
  expect(screen.getByText('Your Learning')).toBeInTheDocument();
});
