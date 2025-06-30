import Hero from './Hero';
import Logos from './Logos';

export default function HomeContainer() {
  return (
    <div data-testid="HomeContainer">
      <Hero />
      <Logos />
    </div>
  );
}
