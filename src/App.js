import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './Home';
import ModeChoice from './ModeChoice';
import Mode2 from './Mode2';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mode-choice" element={<ModeChoice />} />
        <Route path="/mode-2" element={<Mode2 />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
