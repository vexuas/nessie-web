import Hero from './Hero';
import Logos from './Logos';

export default function HomeContainer() {
  const MOCK_LOGOS: string[] = [
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/maki_full.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/maki_full.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/maki_full.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/maki_full.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/maki_full.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/maki_full.jpg',
  ];
  const noOfUsers = '130,000';
  const noOfServers = '1400';

  return (
    <div data-testid="HomeContainer">
      <Hero />
      <Logos logos={MOCK_LOGOS} noOfUsers={noOfUsers} noOfServers={noOfServers} />
    </div>
  );
}
