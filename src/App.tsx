import { Route, Routes } from 'react-router-dom';
import WorkInProgress from './app/components/WorkInProgress';
import LayoutContainer from './app/components/Elements/LayoutContainer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<WorkInProgress />} />
        <Route path="/terms" element={<LayoutContainer>hello</LayoutContainer>} />
      </Routes>
    </div>
  );
}

export default App;
