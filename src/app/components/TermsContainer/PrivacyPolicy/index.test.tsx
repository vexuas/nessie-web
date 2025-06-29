import { render, screen } from '@testing-library/react';
import PrivacyPolicy from '.';

test('renders', () => {
  render(<PrivacyPolicy />);

  expect(screen.getByTestId('PrivacyPolicy')).toBeInTheDocument();
});
