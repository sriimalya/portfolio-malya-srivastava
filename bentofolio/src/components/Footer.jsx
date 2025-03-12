import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = {
    github: "https://github.com/sriimalya",
    linkedin: "https://linkedin.com/in/malya-srivastava-5a4254229",
    email: "mailto:malyasri0112@gmail.com"
  };
  
  return (
    <footer className="bg-zinc-800 flex justify-around items-center px-8 py-4 w-full">
      <div className="container flex flex-col mx-8 md:flex-row justify-between items-center ">
        <div className="mb-4 md:mb-0">
          <p className="text-white">&copy; {new Date().getFullYear()} Malya Srivastava</p>
        </div>
     
        <div className="flex gap-6">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200">
            <Github className="w-5 h-5 hover:text-[#E1FF4A] transition-colors duration-200" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200">
            <Linkedin className="w-5 h-5 hover:text-[#E1FF4A] transition-colors duration-200" />
          </a>
          <a href={socialLinks.email}
            className="transform hover:scale-110 transition-transform duration-200">
            <Mail className="w-5 h-5 hover:text-[#E1FF4A] transition-colors duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;