import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.Contact}>
        <div className={styles.Title}>
          <img src="./nessie_logo.png" alt="Nessie Logo" className={styles.Logo} />
          <span className={styles.Name}>nessie</span>
        </div>
        <div className={styles.Description}>
          For business enquiries or if you just want to reach out, drop me a dm in Discord at
          Vexuas#8141 or email me at hello@vexuas.com :D
        </div>
        <div className={styles.Copyright}>Copyright © 2022 Vexuas</div>
      </div>
      <div className={styles.Links}>
        <div className={styles.Resources}>
          <div className={styles.LinkTitle}>Resources</div>
          <a
            href="https://apexlegendsapi.com/#introduction"
            target="_blank"
            className={styles.LinkName}
            rel="noreferrer"
          >
            API
          </a>
          <a
            href="https://apexlegendsstatus.com"
            target="_blank"
            className={styles.LinkName}
            rel="noreferrer"
          >
            Apex Legends Status
          </a>
          <a
            href="https://discord.com/invite/47Ccgz9jA4"
            target="_blank"
            className={styles.LinkName}
            rel="noreferrer"
          >
            Support Server
          </a>
        </div>
        <div className={styles.About}>
          <div className={styles.LinkTitle}>About</div>
          <Link to="/terms_and_privacy" className={styles.LinkName}>
            Terms of Use
          </Link>
          <Link to="/terms_and_privacy" className={styles.LinkName}>
            Privacy Policy
          </Link>
          <Link to="/" className={styles.LinkName}>
            Nessie
          </Link>
        </div>
      </div>
    </div>
  );
}
