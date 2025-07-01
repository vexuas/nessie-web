import { render, screen } from '@testing-library/react';
import Logos from '.';

test('renders', () => {
  render(<Logos />);

  expect(screen.getByTestId('Logos')).toBeInTheDocument();
  expect(screen.getAllByTestId('Logo')).toHaveLength(12);
});
