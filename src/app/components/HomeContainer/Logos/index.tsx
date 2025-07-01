import styles from './Logos.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// TODO: Upload server logos to cdn and hardcode them here
// TODO: Add carousel functionality
export default function Logos() {
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

  const t_logos = MOCK_LOGOS.map((logo, index) => {
    return (
      <SwiperSlide key={index}>
        <img className={styles.Logo} data-testid="Logo" src={logo} alt="logo" />
      </SwiperSlide>
    );
  });

  return (
    <div className={styles.Container} data-testid="Logos">
      <div className={styles.Title}>Join 123456 users in 2000 servers using Nessie</div>
      <Swiper
        freeMode
        loop
        autoplay={{ delay: 0, disableOnInteraction: false }}
        modules={[Autoplay]}
        className={styles.Logos}
        slidesPerView={6}
        speed={5000}
      >
        {t_logos}
      </Swiper>
    </div>
  );
}
