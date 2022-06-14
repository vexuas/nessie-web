import { Route, Routes } from 'react-router-dom';
import WorkInProgress from './app/components/WorkInProgress';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<WorkInProgress />} />
        <Route path="/terms" element={<div>hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
