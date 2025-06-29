import { render, screen } from '@testing-library/react';
import WorkInProgress from '.';

test('renders', () => {
  render(<WorkInProgress />);

  expect(screen.getByTestId('WorkInProgress')).toBeInTheDocument();
});
