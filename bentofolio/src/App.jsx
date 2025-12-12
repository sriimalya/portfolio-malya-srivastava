import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import UxProjectsPage from './pages/UxProjectsPage';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
        <Header />
        <div className="mx-4 sm:mx-8 mb-12 mt-12 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dev-projects" element={<ProjectsPage />} />
            <Route path="/ux-projects" element={<UxProjectsPage />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;