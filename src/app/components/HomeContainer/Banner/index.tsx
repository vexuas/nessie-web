import { DISCORD_INVITE_LINK } from '../../../../utils/constants';
import Button from '../../Elements/Button';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.Container} data-testid="Banner">
      <div className={styles.Banner}>
        <div className={styles.Title}>Always stay up-to-date</div>
        <a href={DISCORD_INVITE_LINK} target="_blank" rel="noreferrer">
          <Button className={styles.Button} label="Invite" />
        </a>
      </div>
    </div>
  );
}
