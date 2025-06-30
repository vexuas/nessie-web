import styles from './Logos.module.scss';

// TODO: Upload server logos to cdn and hardcode them here
// TODO: Add carousel functionality
export default function Logos() {
  const MOCK_LOGOS: string[] = [
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
    'https://cdn.vexuas.com/Wallpapers/you_cute.jpg',
  ];

  const t_logos = MOCK_LOGOS.map((logo, index) => {
    return <img className={styles.Logo} data-testid="Logo" key={index} src={logo} alt="logo" />;
  });

  return (
    <div className={styles.Container} data-testid="Logos">
      <div className={styles.Title}>Join 123456 users in 2000 servers using Nessie</div>
      <div className={styles.Logos}>{t_logos}</div>
    </div>
  );
}
