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
      <div className={styles.Links}>there</div>
    </div>
  );
}
