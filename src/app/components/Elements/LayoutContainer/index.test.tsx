import { render, screen } from '@testing-library/react';
import LayoutContainer from '.';

test('renders', () => {
  render(
    <LayoutContainer>
      <div>Test</div>
    </LayoutContainer>
  );

  expect(screen.getByTestId('LayoutContainer')).toBeInTheDocument();
  expect(screen.getByTestId('LayoutContainer')).toHaveTextContent('Test');
});
