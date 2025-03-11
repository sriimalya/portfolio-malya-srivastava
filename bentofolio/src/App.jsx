import talkImage from './assets/images/talk.jpg';
import hackerImage from './assets/images/hacker.jpg';
import workingImage from './assets/images/working.jpg';
import workLaptopImage from './assets/images/workLaptop.jpg';
import chatAppPhoto from './assets/images/Chat App.png';
import coinCollector from './assets/images/coincollector.jpeg';
import bmiCalc from './assets/images/bmicalc.png';

import { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ArrowUpRight, Menu } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = {
    github: "https://github.com/sriimalya",
    linkedin: "https://linkedin.com/in/malya-srivastava-5a4254229",
    email: "mailto:malyasri0112@gmail.com"
  };

  const projects = [
    {
      name: "Winsock Chatroom",
      description: "A chatroom application using C++ socket programming.",
      technologies: ["C++", "Winsock"],
      photoPath: chatAppPhoto,
      github: "https://github.com/sriimalya/winsock-chatroom",
      demo: null
    },
    {
      name: "Coin Collector",
      description: "In this game the player navigates through an evironment and collect coins.",
      technologies: ["Unity3D", "C#"],
      photoPath: coinCollector,
      github: "https://github.com/sriimalya/Coin-Collector",
      demo: "https://youtu.be/pNFaFmm1QyM?si=oovgsXYyFJutG4oN"
    },
    {
      name: "BMI Calculator",
      description: "A web app that calculates and displays Body Mass Index (BMI)",
      technologies: ["HTML", "CSS", "JavaScript"],
      photoPath: bmiCalc,
      github: "https://github.com/sriimalya/JS-Projects/tree/main/2-BMI%20Calculator",
      demo: "https://sriimalya.github.io/JS-Projects/2-BMI%20Calculator/index.html"
    }
  ];

  const experience = [
    {
      title: "UI/UX Designer and Developer",
      company: "CA Cloud Desk",
      period: "Jan, 2024 - Jun, 2024",
      skills: "Figma, HTML, CSS, JS, Wordpress"
    },
    {
      title: "Product Designer",
      company: "Soach Global",
      period: "Feb, 2024 - Sept, 2024",
      skills: "Figma, HTML, CSS, JS"
    }
  ];

  const images = [
    { id: 1, src: talkImage },
    { id: 2, src: hackerImage },
    { id: 3, src: workingImage },
    { id: 4, src: workLaptopImage },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="bg-[#E1FF4A] w-12 h-12 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-200">
          <span className="text-black text-2xl font-bold">M</span>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        <nav className={`${isMenuOpen ? 'block absolute top-16 right-4 bg-zinc-800 p-4 rounded-lg shadow-lg' : 'hidden'} lg:block lg:static lg:bg-transparent lg:p-0 lg:shadow-none transition-all duration-200`}>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <a href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white hover:text-[#E1FF4A] transition-colors duration-200">
              home
            </a>
            <a href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-[#E1FF4A] transition-colors duration-200">
              project
            </a>
            <a href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-[#E1FF4A] transition-colors duration-200">
              contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="col-span-1 lg:col-span-2 rounded-3xl p-8 border border-white border-1 flex flex-col justify-center transform hover:border-[#E1FF4A] transition-colors duration-300">
          <h1 className="text-3xl sm:text-4xl font-medium mb-4">
            Hi, I am <span className="text-[#E1FF4A]">Malya Srivastava</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            A passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#E1FF4A] text-black px-6 py-2 rounded-full flex items-center gap-1 hover:bg-[#d4f038] transform hover:scale-105 transition-all duration-200">
              My Work <ArrowUpRight size={20} />
            </button>
            <div className="flex gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200">
                <Github className="w-6 h-6 hover:text-[#E1FF4A] transition-colors duration-200" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-6 h-6 hover:text-[#E1FF4A] transition-colors duration-200" />
              </a>
              <a href={socialLinks.email}
                className="transform hover:scale-110 transition-transform duration-200">
                <Mail className="w-6 h-6 hover:text-[#E1FF4A] transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {images.map(({ id, src }) => (
            <div key={id} className="border-b-2 border-r-2 border-[#E1FF4A] rounded-2xl w-full sm:w-[180px] sm:h-[150px] overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <img
                src={src}
                alt={`Photo ${id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>


      {/* Skills & Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#E1FF4A] rounded-3xl p-8 ">
          <h2 className="text-[#E1FF4A] text-xl font-medium mb-6 inline-block px-4 py-1 bg-zinc-900 rounded-full">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "C/C++",
              "Java",
              "Python",
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "SQL",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "GitLFS",
              "Unity3D",
              "Figma",
              "Operating System",
              "Computer Network",
              "Object-Oriented Programming"
            ].map((skill, i) => (
              <span
                key={i}
                className={`px-4 py-1 rounded-full hover:scale-105 transition-transform duration-200 border border-zinc-900 border-1 text-black text-3xl" 
                  }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-1 border-white rounded-3xl p-8 transform hover:border-[#E1FF4A] transition-colors duration-300">
          <h2 className="text-xl font-medium mb-6 inline-block px-4 py-1 bg-white text-black rounded-full">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-6 last:mb-0">
              <div className="flex items-top gap-2 mb-1">
                <div className="w-4 h-4 text-[#E1FF4A]">✦</div>
                <h3 className="text-xl text-[#E1FF4A]">{exp.title}</h3>
              </div>
              <div className="ml-6">
                <p className="font-bold">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <p className="text-sm text-gray-400">Skills: {exp.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="mb-12 border border-white border-1 p-8 sm:p-12 rounded-3xl hover:border-[#E1FF4A]">
        <div className="flex gap-4 items-center mb-8">
          <h2 className="text-[#E1FF4A] text-3xl font-bold">PROJECTS</h2>
          <button className="border border-white px-3 py-1 rounded-full text-sm flex items-center gap-0.5 text-[#E1FF4A]">
            view all <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
          {projects.map((project, i) => (
            <div key={i}>
              <div className="transform hover:scale-105 transition-transform duration-300 border border-white border-1 rounded-3xl aspect-video bg-zinc-700 overflow-hidden">
                <img
                  src={project.photoPath}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className='py-4'>
                <h3 className="text-[#E1FF4A] font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-700 rounded-full text-sm hover:bg-zinc-600 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 hover:text-[#E1FF4A] transition-colors duration-200"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 hover:text-[#E1FF4A] transition-colors duration-200"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Contact */}
      <div id="contact" className="rounded-3xl p-8 text-center border border-white border-1 hover:border-[#E1FF4A] transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-6">
          I'm always open to discussing new projects and opportunities.
        </p>
        <a href={socialLinks.email}
          className="bg-[#E1FF4A] text-black px-6 py-2 rounded-full flex items-center gap-2 mx-auto w-fit hover:bg-[#d4f038] transform hover:scale-105 transition-all duration-200">
          Send me an Email <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;