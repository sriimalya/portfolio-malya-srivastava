import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import DevDiaries from './pages/DevDiaries';
import Blogs from './pages/BlogPage';
import Footer from './components/Footer';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3, ease: 'easeInOut' },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div {...pageTransition}>
              <ProjectsPage />
            </motion.div>
          }
        />
        <Route
          path="/dev-diaries"
          element={
            <motion.div {...pageTransition}>
              <DevDiaries />
            </motion.div>
          }
        />
        {/* <Route
          path="/blogs"
          element={
            <motion.div {...pageTransition}>
              <Blogs />
            </motion.div>
          }
        /> */}
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-canvas text-primary flex flex-col transition-colors duration-400">
          <Header />
          <main className="max-w-container mx-auto w-full px-4 sm:px-6 lg:px-8 flex-grow pt-8 pb-16">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;