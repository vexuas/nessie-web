import styles from './WorkInProgress.module.scss';

export default function WorkInProgress() {
  return (
    <div className={styles.Container} data-testid="WorkInProgress">
      <div>Nothing here yet :)</div>
      <div>Come back in a couple of weeks! (probably)</div>
      <div className={styles.ImageContainer}>
        <img
          alt="nessie no peace"
          className={styles.Image}
          src="https://cdn.vexuas.com/nessie/nessie_no_peace.jpeg"
        />
      </div>
    </div>
  );
}
