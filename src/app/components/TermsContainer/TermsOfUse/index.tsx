import styles from './TermsOfUse.module.scss';

export default function TermsOfUse() {
  return (
    <div className={styles.Section} id="terms_of_use">
      <div className={styles.Title}>Terms of Use</div>
      <div className={styles.Description}>
        <p>
          Nessie is a free-to-use Discord Bot made for the game Apex Legends. Its main purpose is to
          show the current map rotations within the game.
        </p>
        <p>
          The services and information provided by Nessie are for informational purposes only. You
          agree that you will only use Nessie, or data/information provided by it, for its intended
          purposes.
        </p>
        <p>
          By accessing Nessie, you are bound by Discord’s Terms of Service. Users who are not
          compliant with Discord’s Terms of Services are therefore not compliant with Nessie’s Terms
          of Use.
        </p>
      </div>
    </div>
  );
}
