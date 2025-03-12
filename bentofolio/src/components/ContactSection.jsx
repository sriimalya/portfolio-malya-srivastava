import { ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const email = "mailto:malyasri0112@gmail.com";
  
  return (
    <div id="contact" className="mx-8 rounded-3xl p-8 text-center border border-white border-1 hover:border-[#E1FF4A] transition-colors duration-300">
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