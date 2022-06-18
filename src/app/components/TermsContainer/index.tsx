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

  /**
   * Handler to scroll to specific element
   * Checks if location has a hash and scrolls to position based on value
   * Was initially privacy policy but switched to introduction as we want people to see the beginning of the page
   */
  useEffect(() => {
    const introductionElement = document.getElementById('introduction');
    const termsOfUseElement = document.getElementById('terms_of_use');
    if (introductionElement && termsOfUseElement && location.hash.length > 0) {
      location.hash === '#introduction' && window.scrollTo(0, 0);
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
