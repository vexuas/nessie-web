import { render, screen } from '@testing-library/react';
import Hero from '.';

test('renders', () => {
  render(<Hero />);

  expect(screen.getByTestId('Hero')).toBeInTheDocument();
});
