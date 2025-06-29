import { render, screen } from '@testing-library/react';
import ContactUs from '.';

test('renders', () => {
  render(<ContactUs />);

  expect(screen.getByTestId('ContactUs')).toBeInTheDocument();
});
