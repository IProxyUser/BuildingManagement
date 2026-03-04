import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hausmeisterservice from './pages/Hausmeisterservice';
import Objektbetreuung from './pages/Objektbetreuung';
import Gebaeudereinigung from './pages/Gebaeudereinigung';
import Kleinreparaturen from './pages/Kleinreparaturen';
import Gruenanlagenpflege from './pages/Gruenanlagenpflege';
import Winterdienst from './pages/Winterdienst';
import Kontakt from './pages/Kontakt';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hausmeisterservice" element={<Hausmeisterservice />} />
            <Route path="/objektbetreuung" element={<Objektbetreuung />} />
            <Route path="/gebaeudereinigung" element={<Gebaeudereinigung />} />
            <Route path="/kleinreparaturen" element={<Kleinreparaturen />} />
            <Route path="/gruenanlagenpflege" element={<Gruenanlagenpflege />} />
            <Route path="/winterdienst" element={<Winterdienst />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
