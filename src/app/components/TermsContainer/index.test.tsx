import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TermsContainer from '.';

test('renders', () => {
  render(
    <MemoryRouter>
      <TermsContainer />
    </MemoryRouter>
  );

  expect(screen.getByTestId('TermsContainer')).toBeInTheDocument();
});
