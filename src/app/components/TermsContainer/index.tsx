import LayoutContainer from '../Elements/LayoutContainer';
import styles from './TermsContainer.module.scss';
import Introduction from './Introduction';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';
import ContactUs from './ContactUs';

export default function TermsContainer() {
  return (
    <LayoutContainer>
      <div className={styles.Container}>
        <Introduction />
        <PrivacyPolicy />
        <TermsOfUse />
        <ContactUs />
      </div>
    </LayoutContainer>
  );
}
