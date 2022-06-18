import { Route, Routes, useLocation } from 'react-router-dom';
import WorkInProgress from './app/components/WorkInProgress';
import TermsContainer from './app/components/TermsContainer';
import NavBar from './app/components/NavBar';
import Footer from './app/components/Footer';
import styles from './App.module.scss';
import { useEffect, useRef } from 'react';

function App() {
  const location = useLocation();
  const previousLocation = useRef('');

  /**
   * Handler to scroll to beginning of page
   * Occurs every time a location changes unless it's the same page/there's a hash param
   */
  useEffect(() => {
    if (location.pathname !== previousLocation.current && location.hash.length === 0) {
      window.scrollTo(0, 0);
    }
    previousLocation.current = location.pathname;
  }, [location]);

  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<WorkInProgress />} />
        <Route path="/terms_and_privacy" element={<TermsContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
