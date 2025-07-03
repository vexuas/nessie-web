import Button from '../../Elements/Button';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.Container}>
      <div className={styles.Banner}>
        <div className={styles.Title}>Always stay up-to-date</div>
        <Button className={styles.Button} label="Invite" />
      </div>
    </div>
  );
}
