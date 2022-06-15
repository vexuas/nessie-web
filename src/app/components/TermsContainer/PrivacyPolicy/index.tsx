import styles from './PrivacyPolicy.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={styles.Section}>
      <div className={styles.Title}>Privacy Policy</div>
      <div className={styles.Description}>
        <p>
          To deliver the best experience for our users, the following information is stored solely
          for their proper operation:
          <ul>
            <li>
              Discord Server identifiers to associate your servers of configuration within the
              Service;
            </li>
            <li>
              Interactions you have made with the Bot, including commands executed, time of
              execution, Discord server, channel and user of execution, and any arguments passed to
              the command.
            </li>
          </ul>
        </p>
        <p>
          We retain the collected information as long as is necessary. Data is removed when the
          reason for its collection is no longer applicable.
        </p>
        <p>We do not sell or otherwise share any collected data with any third parties.</p>
      </div>
    </div>
  );
}
