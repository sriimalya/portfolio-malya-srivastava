import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SkillsExperienceSection from '../components/SkillsExperienceSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillsExperienceSection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
};

export default Home;