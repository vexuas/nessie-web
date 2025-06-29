import { render, screen } from '@testing-library/react';
import Introduction from '.';

test('renders', () => {
  render(<Introduction />);

  expect(screen.getByTestId('Introduction')).toBeInTheDocument();
});
