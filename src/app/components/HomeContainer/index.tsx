import { SERVER_LOGOS } from '../../../utils/constants';
import Hero from './Hero';
import Logos from './Logos';

export default function HomeContainer() {
  const logos: { name: string; src: string }[] = [...SERVER_LOGOS].sort(() => Math.random() - 0.5); // Shuffle the position of logos on every render for fun
  const noOfUsers: string = '130,000';
  const noOfServers: string = '1400';

  return (
    <div data-testid="HomeContainer">
      <Hero />
      <Logos logos={logos} noOfUsers={noOfUsers} noOfServers={noOfServers} />
    </div>
  );
}
