import { render, screen } from '@testing-library/react';
import Button from '.';

test('renders', () => {
  render(<Button label="Test" />);

  expect(screen.getByTestId('Button')).toBeInTheDocument();
  expect(screen.getByTestId('Button')).toHaveTextContent('Test');
});
