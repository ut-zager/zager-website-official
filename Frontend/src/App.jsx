import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Ensure this file exists
import Home from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Product from './pages/Products';
import Services from './pages/Services';

function App() {
  return (
    <Router> {/* Ensure BrowserRouter wraps everything */}
      <Navbar />  {/* Navbar will be visible on all pages */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      
      <Footer /> {/* Footer will also be visible on all pages */}
    </Router>
  );
}

export default App;
