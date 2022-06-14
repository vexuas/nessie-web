import LayoutContainer from '../Elements/LayoutContainer';
import styles from './TermsContainer.module.scss';

export default function TermsContainer() {
  return (
    <LayoutContainer>
      <div className={styles.Container}>
        <div className={styles.Section}>
          <div className={styles.Title}>Introduction</div>
          <div className={styles.Description}>
            <p>Last Updated: 15 June 2022</p>
            <p>
              Hey there! Thanks for your interest in Nessie (the “Bot”), developed by the Nessie
              team (”we”, “us”, “our”). To provide the best possible experience, we collect some
              necessary data from Discord users (the “User”, “you”, “they”, “their”) who have
              interacted with the Bot as well as the respective Discord guilds (the “Server(s)”)
              that Nessie has been added to.
            </p>
            <p>
              The Privacy Policy below outlines our policies regarding the data we collect via our
              bot or any other software we have developed (collectively, our “Services(s)”).
            </p>
          </div>
        </div>
        <div className={styles.Section}>
          <div className={styles.Title}>Privacy Policy</div>
          <div className={styles.Description}>
            <p>
              To deliver the best experience for our users, the following information is stored
              solely for their proper operation:
              <ul>
                <li>
                  Discord Server identifiers to associate your servers of configuration within the
                  Service;
                </li>
                <li>
                  Interactions you have made with the Bot, including commands executed, time of
                  execution, Discord server, channel and user of execution, and any arguments passed
                  to the command.
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
      </div>
    </LayoutContainer>
  );
}
