import { Route, Routes } from 'react-router-dom';
import WorkInProgress from './app/components/WorkInProgress';
import TermsContainer from './app/components/TermsContainer';
import Footer from './app/components/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<WorkInProgress />} />
        <Route path="/terms" element={<TermsContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
