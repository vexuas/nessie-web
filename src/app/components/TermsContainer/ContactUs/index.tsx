import styles from './ContactUs.module.scss';

export default function ContactUs() {
  return (
    <div className={styles.Section}>
      <div className={styles.Title}>Contacting Us</div>
      <div className={styles.Description}>
        <p>
          In the case of any questions or concerns (such as data removal requests) regarding this
          Privacy Policy and Terms of Use, please send a message to{' '}
          <a href="mailto:hello@vexuas.com">hello@vexuas.com</a>, and we will do our best to resolve
          your concerns!
        </p>
      </div>
    </div>
  );
}
