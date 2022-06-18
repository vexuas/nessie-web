import LayoutContainer from '../Elements/LayoutContainer';
import styles from './TermsContainer.module.scss';
import Introduction from './Introduction';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';
import ContactUs from './ContactUs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function TermsContainer() {
  const location = useLocation();

  useEffect(() => {
    const privacyPolicyElement = document.getElementById('privacy_policy');
    const termsOfUseElement = document.getElementById('terms_of_use');
    if (privacyPolicyElement && termsOfUseElement && location.hash.length > 0) {
      location.hash === '#privacy_policy' &&
        window.scrollTo(0, privacyPolicyElement.offsetTop - 120);
      location.hash === '#terms_of_use' && window.scrollTo(0, termsOfUseElement.offsetTop - 120);
    }
  }, [location]);

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
