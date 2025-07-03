import { render, screen } from '@testing-library/react';
import Banner from '.';

test('renders', () => {
  render(<Banner />);

  expect(screen.getByTestId('Banner')).toBeInTheDocument();
});
