import { render, screen } from '@testing-library/react';
import HomeContainer from '.';

test('renders', () => {
  render(<HomeContainer />);

  expect(screen.getByTestId('HomeContainer')).toBeInTheDocument();
  expect(screen.getByTestId('Hero')).toBeInTheDocument();
});
