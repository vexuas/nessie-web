import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <div className={styles.Section} id="introduction">
      <div className={styles.Title}>Introduction</div>
      <div className={styles.Description}>
        <p>Last Updated: 15 June 2022</p>
        <p>
          Hey there! Thanks for your interest in Nessie (the “Bot”), developed by the Nessie team
          (”we”, “us”, “our”). To provide the best possible experience, we collect some necessary
          data from Discord users (the “User”, “you”, “they”, “their”) who have interacted with the
          Bot as well as the respective Discord guilds (the “Server(s)”) that Nessie has been added
          to.
        </p>
        <p>
          The Privacy Policy below outlines our policies regarding the data we collect via our bot
          or any other software we have developed (collectively, our “Services(s)”).
        </p>
      </div>
    </div>
  );
}
