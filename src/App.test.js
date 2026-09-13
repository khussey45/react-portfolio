import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';
import data from './data/portfolio';

test('renders the new portfolio sections in order', () => {
  const { container } = render(<App />);
  expect([...container.querySelectorAll('main > section')].map(section => section.id)).toEqual(['focus', 'ai', 'skills', 'experience', 'projects', 'studies', 'contact']);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A robotic arm.');
  expect(screen.getByText(data.currentFocus.images[0].caption)).toBeInTheDocument();
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
  const secondThumbnail = screen.getByRole('button', { name: 'Show project image 2' });
  fireEvent.click(secondThumbnail);
  expect(secondThumbnail).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByAltText(slides[1].alt)).toBeInTheDocument();
});


test('Research links lead to the research page and its navigation returns home', () => {
  const { unmount } = render(<App />);
  expect(screen.getByRole('link', { name: 'Research' })).toHaveAttribute('href', '/research');
  expect(screen.getByRole('link', { name: /Explore my research/ })).toHaveAttribute('href', '/research');
  unmount();
  window.history.pushState({}, '', '/research');
  try {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(data.studies.heading);
    expect(screen.getByRole('link', { name: 'Research' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/#projects');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#contact');
  } finally {
    window.history.replaceState({}, '', '/');
  }
});

test.each(data.studies.topics)('$title tile opens a topic placeholder with navigation back to Research', topic => {
  window.history.replaceState({}, '', '/research');
  const { unmount } = render(<App />);
  const tile = within(screen.getByRole('main')).getByRole('link', { name: topic.title });
  const destination = `/research/${topic.slug}`;
  expect(tile).toHaveAttribute('href', destination);
  unmount();
  window.history.replaceState({}, '', `${destination}/`);
  try {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(topic.title);
    expect(screen.getByText(data.studies.emptyTitle)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to Research/ })).toHaveAttribute('href', '/research');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#contact');
    expect(document.title).toBe(`${topic.title} — ${data.name}`);
  } finally {
    window.history.replaceState({}, '', '/');
  }
});
