import { render, screen } from '@testing-library/react';
import TermsOfUse from '.';

test('renders', () => {
  render(<TermsOfUse />);

  expect(screen.getByTestId('TermsOfUse')).toBeInTheDocument();
});
