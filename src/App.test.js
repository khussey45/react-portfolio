import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import data from './data/portfolio';

test('renders the new portfolio sections in order', () => {
  const { container } = render(<App />);
  expect([...container.querySelectorAll('main > section')].map(section => section.id)).toEqual(['focus', 'ai', 'skills', 'projects', 'contact']);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A robotic arm.');
  expect(screen.getByText('Concept image · project photos coming soon')).toBeInTheDocument();
});

test('preserves project websites and original images', () => {
  render(<App />);
  data.projects.forEach(project => {
    expect(screen.getByRole('link', { name: `${project.title} — visit website (opens in new tab)` })).toHaveAttribute('href', project.url);
    expect(screen.getByAltText(`${project.title} screenshot`)).toHaveAttribute('src', project.image);
  });
});

test('mobile navigation opens and closes after following a link', () => {
  render(<App />);
  const menu = screen.getByRole('button', { name: 'Menu +' });
  expect(menu).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Toolkit' }));
  expect(menu).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('link', { name: /khussey45@gmail.com/ })).toHaveAttribute('href', 'mailto:khussey45@gmail.com');
});

test('project carousel supports arrows, wrapping, and keyboard navigation', () => {
  render(<App />);
  const slides = data.currentFocus.images;
  const next = screen.getByRole('button', { name: 'Next project image' });
  const previous = screen.getByRole('button', { name: 'Previous project image' });
  expect(screen.getByAltText(slides[0].alt)).toHaveAttribute('src', slides[0].src);
  fireEvent.click(previous);
  expect(screen.getByAltText(slides[slides.length - 1].alt)).toBeInTheDocument();
  fireEvent.click(next);
  expect(screen.getByAltText(slides[0].alt)).toBeInTheDocument();
  fireEvent.keyDown(next, { key: 'ArrowRight' });
  expect(screen.getByAltText(slides[1].alt)).toHaveAttribute('src', slides[1].src);
  expect(screen.getByText(`2 / ${slides.length}`)).toBeInTheDocument();
  fireEvent.keyDown(previous, { key: 'ArrowLeft' });
  expect(screen.getByAltText(slides[0].alt)).toBeInTheDocument();
});
