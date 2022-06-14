import { Route, Routes } from 'react-router-dom';
import './App.scss';
import WorkInProgress from './app/components/WorkInProgress';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WorkInProgress />} />
        <Route path="/terms" element={<div>hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
