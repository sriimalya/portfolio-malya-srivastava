import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactSection from '../components/ContactSection';

const Home = () => {
  useEffect(() => {
    document.title = 'Malya Srivastava — Full Stack Engineer';
  }, []);

  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <ExperienceSection />
      <ContactSection />
    </>
  );
};

export default Home;