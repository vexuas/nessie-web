import styles from './Logos.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// TODO: Upload server logos to cdn and hardcode them here
// TODO: Add carousel functionality

interface Props {
  logos: { name: string; src: string }[];
  noOfUsers: string;
  noOfServers: string;
}

export default function Logos({ logos, noOfUsers, noOfServers }: Props) {
  const breakPoints = {
    600: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  };
  const t_logos = logos.map((logo, index) => {
    return (
      <SwiperSlide key={index}>
        <img className={styles.Logo} data-testid="Logos__logo" src={logo.src} alt={logo.name} />
      </SwiperSlide>
    );
  });

  return (
    <div className={styles.Container} data-testid="Logos">
      <div className={styles.Title}>
        Join over{' '}
        <span className={styles.Users} data-testid="Logos__users">
          {noOfUsers}
        </span>{' '}
        users in{' '}
        <span className={styles.Servers} data-testid="Logos__servers">
          {noOfServers}+
        </span>{' '}
        servers using Nessie
      </div>
      <Swiper
        freeMode
        loop
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={breakPoints}
        modules={[Autoplay]}
        className={styles.Logos}
        speed={7500}
      >
        {t_logos}
      </Swiper>
    </div>
  );
}
