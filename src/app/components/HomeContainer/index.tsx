import { SERVER_LOGOS } from '../../../utils/constants';
import Hero from './Hero';
import Logos from './Logos';

export default function HomeContainer() {
  const noOfUsers = '130,000';
  const noOfServers = '1400';

  return (
    <div data-testid="HomeContainer">
      <Hero />
      <Logos logos={SERVER_LOGOS} noOfUsers={noOfUsers} noOfServers={noOfServers} />
    </div>
  );
}
