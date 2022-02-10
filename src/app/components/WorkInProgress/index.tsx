import styles from './WorkInProgress.module.scss';

export default function WorkInProgress() {
  return (
    <div className={styles.Container}>
      <div>Nothing here yet :)</div>
      <div>Come back in a couple of weeks!</div>
      <div className={styles.ImageContainer}>
        <img
          alt="nessie no peace"
          className={styles.Image}
          src="https://cdn.discordapp.com/attachments/248430185463021569/941367888797896724/nessie_no_peace.jpeg"
        />
      </div>
    </div>
  );
}
