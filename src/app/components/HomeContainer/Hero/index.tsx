import Button from '../../Elements/Button';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftSection}>
        <div className={styles.Title}>Stay up-to-date with Apex Legends Map Rotations </div>
        <div className={styles.Description}>
          Tired of not knowing what maps can be played? Ever booted up the game only to find out
          your least favourite map is on? (king’s canyon bleghh) Suffer no more, with Nessie you
          will always know what map is in rotation, all in the comforts of your own Discord server
        </div>
        <div>
          <Button className={styles.SeeMoreButton} label="See features" />
          <Button className={styles.AddButton} label="Add to discord" />
        </div>
      </div>
      <div className={styles.RightSection}>
        <img className={styles.Image} src="https://cdn.vexuas.com/nessie/nessie_no_peace.jpeg" />
      </div>
    </div>
  );
}
