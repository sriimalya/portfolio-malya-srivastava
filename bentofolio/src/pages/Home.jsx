import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection/>
      <FeaturedProjects />
      <ContactSection />
    </>
  );
};

export default Home;