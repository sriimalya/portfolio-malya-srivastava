import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { FaBehance } from "react-icons/fa";
import talkImage from "../assets/images/talk.jpg";
import hackerImage from "../assets/images/hacker.jpg";
import workingImage from "../assets/images/working.jpg";
import workLaptopImage from "../assets/images/workLaptop.jpg";

const HeroSection = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const socialLinks = {
    github: "https://github.com/sriimalya",
    linkedin: "https://linkedin.com/in/malya-srivastava-5a4254229",
    email: "mailto:malyasri0112@gmail.com",
    behance: "https://www.behance.net/malyasrivastava",
  };

  const images = [
    { id: 1, src: talkImage, alt: "Presenting" },
    { id: 2, src: hackerImage, alt: "Coding session" },
    { id: 3, src: workingImage, alt: "Working on project" },
    { id: 4, src: workLaptopImage, alt: "Laptop workspace" },
  ];

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 mx-8">
      <div className="col-span-1 lg:col-span-2 border border-white/20 rounded-2xl py-5 px-6 hover:border-[#E1FF4A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E1FF4A]/10 bg-gradient-to-br from-white/[0.02] to-transparent group flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-medium mb-4">
          Hi, I am <span className="text-[#E1FF4A]">Malya Srivastava</span>
        </h1>
        <p className="text-l sm:text-l mb-6">
          Building full-stack web apps that are <span className="italic">fast, scalable, and production-ready.</span>
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://drive.google.com/file/d/1A0Ggf3O30-vmF85RdK0R0o2Y8fiI4RAB/view?usp=sharing"
            className="bg-[#E1FF4A] text-black px-6 py-2 rounded-full flex items-center gap-1 hover:bg-[#d4f038] transform hover:scale-105 transition-all duration-200"
          >
            Resume <ExternalLink size={18} />
          </a>

          <div className="flex gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 hover:text-[#E1FF4A] transition-colors duration-200" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 hover:text-[#E1FF4A] transition-colors duration-200" />
            </a>
            <a
              href={socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
              aria-label="Behance Portfolio"
            >
              <FaBehance className="w-6 h-6 scale-110 hover:text-[#E1FF4A] transition-colors duration-200" />
            </a>
            <a
              href={socialLinks.email}
              className="transform hover:scale-110 transition-transform duration-200"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 hover:text-[#E1FF4A] transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 w-full max-w-md md:max-w-full">
          {images.map(({ id, src, alt }) => (
            <div
              key={id}
              className="border-b-2 border-r-2 border-[#E1FF4A] rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-200 aspect-[6/5] bg-white/5 relative"
            >
              {/* Loading skeleton */}
              {!loadedImages[id] && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 animate-pulse" />
              )}
              
              {/* Actual image */}
              <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(id)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  loadedImages[id] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;