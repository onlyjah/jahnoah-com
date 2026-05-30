import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import About from 'pages/About';
import Projects from 'pages/Projects';

import 'src/App.css'
function App() {
  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Projects', url: '/projects' }
  ];

  return (
    <BrowserRouter><div>
      <Navbar links={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div></BrowserRouter>
  );
}

export default App
