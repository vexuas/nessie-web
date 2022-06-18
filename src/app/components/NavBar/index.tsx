import styles from './NavBar.module.scss';
import Button from '../Elements/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    //Set scroll position when user scrolls in the browser; useful to know so we can add the scrolling class
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  });
  return (
    <div className={`${styles.Container} ${scroll > 10 && styles.Scrolling}`}>
      <Link to="/">
        <div className={styles.Title}>
          <img src="./nessie_logo.png" alt="Nessie Logo" className={styles.Logo} />
          <div className={styles.Name}>nessie</div>
        </div>
      </Link>
      <div className={styles.Links}>
        <a
          href="https://discord.com/invite/47Ccgz9jA4"
          target="_blank"
          className={styles.LinkName}
          rel="noreferrer"
        >
          Support Server
        </a>
        <a
          href="https://apexlegendsapi.com/#introduction"
          target="_blank"
          className={styles.LinkName}
          rel="noreferrer"
        >
          API
        </a>
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=889135055430111252&permissions=3088&scope=applications.commands%20bot"
          target="_blank"
          rel="noreferrer"
        >
          <Button label="Invite" />{' '}
        </a>
      </div>
    </div>
  );
}
