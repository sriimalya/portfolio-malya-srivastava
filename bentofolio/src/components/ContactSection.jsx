import { ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const email = "mailto:malyasri0112@gmail.com";
  
  return (
    <div id="contact" className="m-8 border border-white/20 rounded-2xl py-5 px-6 hover:border-[#E1FF4A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E1FF4A]/10 bg-gradient-to-br from-white/[0.02] to-transparent group flex flex-col text-center">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-6">
        I'm always open to discussing new projects and opportunities.
      </p>
      <a href={email}
        className="bg-[#E1FF4A] text-black px-6 py-2 rounded-full flex items-center gap-2 mx-auto w-fit hover:bg-[#d4f038] transform hover:scale-105 transition-all duration-200">
        Send me an Email <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default ContactSection;