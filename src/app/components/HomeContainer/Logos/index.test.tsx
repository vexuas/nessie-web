import { render, screen } from '@testing-library/react';
import Logos from '.';

const mockLogos = [
  {
    name: 'Test',
    src: 'https://via.placeholder.com/150',
  },
  {
    name: 'Test',
    src: 'https://via.placeholder.com/150',
  },
];

test('renders', () => {
  render(<Logos logos={[]} noOfUsers="" noOfServers="" />);

  expect(screen.getByTestId('Logos')).toBeInTheDocument();
  expect(screen.queryByTestId('Logos__logo')).not.toBeInTheDocument();
});
test('displays the correct number of users and servers', () => {
  render(<Logos logos={[]} noOfUsers="130,000" noOfServers="1400" />);

  expect(screen.getByTestId('Logos__users')).toHaveTextContent('130,000');
  expect(screen.getByTestId('Logos__servers')).toHaveTextContent('1400+');
});
test('displays the correct number of logos', () => {
  render(<Logos logos={mockLogos} noOfUsers="130,000" noOfServers="1400" />);

  expect(screen.getAllByTestId('Logos__logo')).toHaveLength(mockLogos.length);
});
