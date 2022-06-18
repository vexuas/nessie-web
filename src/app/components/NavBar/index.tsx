import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <img src="./nessie_logo.png" alt="Nessie Logo" className={styles.Logo} />
        <div className={styles.Name}>nessie</div>
      </div>
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
      </div>
    </div>
  );
}
