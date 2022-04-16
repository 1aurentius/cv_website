import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Work from './components/pages/Work';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/work'} element={<Work />} />

      </Routes>
    </Router>
  );
}

export default App;
