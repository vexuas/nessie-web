import { useMemo } from 'react';
import { SERVER_LOGOS } from '../../../utils/constants';
import Hero from './Hero';
import Logos from './Logos';
import Banner from './Banner';

export default function HomeContainer() {
  const logos: { id: number; name: string; src: string }[] = useMemo(() => {
    return [...SERVER_LOGOS].sort(() => Math.random() - 0.5); // Shuffle the position of logos for fun
  }, [SERVER_LOGOS]);

  const noOfUsers: string = '130,000';
  const noOfServers: string = '1400';

  return (
    <div data-testid="HomeContainer">
      <Hero />
      <Logos logos={logos} noOfUsers={noOfUsers} noOfServers={noOfServers} />
      <Banner />
    </div>
  );
}
