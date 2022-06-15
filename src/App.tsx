import { Route, Routes } from 'react-router-dom';
import WorkInProgress from './app/components/WorkInProgress';
import TermsContainer from './app/components/TermsContainer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<WorkInProgress />} />
        <Route path="/terms" element={<TermsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
