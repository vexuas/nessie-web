import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <img src="./nessie_logo.png" alt="Nessie Logo" className={styles.Logo} />
        <div className={styles.Name}>nessie</div>
      </div>
      <div className={styles.Links}>Hi</div>
    </div>
  );
}
