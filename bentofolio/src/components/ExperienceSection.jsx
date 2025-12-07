import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { ArrowUpRight, X } from "lucide-react";

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpen = (exp) => setSelectedExperience(exp);
  const handleClose = () => setSelectedExperience(null);

  const experiences = [
    {
      id: 1,
      title: "UI/UX Design and Development Intern",
      company: "CA Cloud Desk",
      period: "Jun, 2024 - Sept, 2024",
      skills: "Figma, Wordpress, HTML, CSS, JS",
      description:
        "Developed and designed user interfaces for accounting solutions. Worked on WordPress customization and front-end development.",
      achievements: [
        "Built responsive WordPress themes",
        "Improved user engagement by 40%",
        "Delivered 5+ client projects",
      ],
    },
    {
      id: 2,
      title: "Backend Development Intern",
      company: "Lenstrack Pvt. Ltd.",
      period: "Aug, 2025 - Aug, 2025",
      skills: "Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, Git",
      description:
        "Implemented and maintained scalable RESTful APIs, designed database schemas, and optimized queries for high-performance backend services. Collaborated with cross-functional teams to deliver secure and reliable backend features.",
      achievements: [
        "Developed and optimized REST API endpoints used in production",
        "Improved database query performance through schema redesign and indexing",
        "Contributed to debugging, unit testing, and feature enhancements",
        "Ensured backend security and code quality through best practices",
      ],
    },
    {
      id: 3,
      title: "System Engineer Trainee",
      company: "Infosys Ltd.",
      period: "Sept, 2025 - Present",
      skills: "Java, SQL, MERN Stack, OOP, Software Engineering",
      description:
        "Currently undergoing intensive training in software engineering fundamentals, focusing on Java, SQL, and MERN stack development, along with modern development practices and methodologies.",
      achievements: [
        "Gained hands-on experience with full-stack development tools and workflows",
        "Strengthened understanding of backend, frontend, and database fundamentals",
        "Trained in industry-standard software development methodologies",
      ],
    },
  ];

  return (
    <div className="mb-12 mx-4 md:mx-8">
      <h2 className="text-3xl font-bold text-[#E1FF4A] mb-6">Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-[#E1FF4A] rounded-3xl px-8 pt-8 pb-8 relative overflow-hidden"
          >
            {/* Decorative Number */}
            <div className="absolute left-0 top-0 text-[120px] font-bold text-black/10 leading-none select-none">
              {exp.id}
            </div>

            {/* Content Container */}
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 leading-tight">
                {exp.title}
              </h3>

              <div className="mb-3">
                <p className="text-black font-semibold text-lg">
                  @ {exp.company}
                </p>
                <p className="text-black/70 text-sm font-medium">
                  {exp.period}
                </p>
              </div>
            </div>

            <button
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center 
                         hover:scale-110 transition-all duration-300 
                         absolute bottom-4 right-6 z-20"
              aria-label="View Details"
              onClick={() => handleOpen(exp)}
            >
              <ArrowUpRight size={24} className="text-[#E1FF4A]" />
            </button>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedExperience}
        onClose={handleClose}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Centered panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {selectedExperience && (
            <DialogPanel className="bg-[#E1FF4A] rounded-3xl px-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto scrollbar-hide relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center
           hover:scale-110 transition-all duration-300
           sticky top-8 ml-auto z-20"
              >
                <X size={20} className="text-[#E1FF4A]" />
              </button>

                <DialogTitle className="text-3xl font-bold text-black mb-4 pr-12">
                  {selectedExperience.title}
                </DialogTitle>

              <div className="relative z-10">
                <div className="mb-6">
                  <p className="text-black font-semibold text-xl">
                    @ {selectedExperience.company}
                  </p>
                  <p className="text-black/70 text-base font-medium">
                    {selectedExperience.period}
                  </p>
                </div>

                <div className="border-t-2 border-black/20 pt-6">
                  <p className="text-black/80 text-base font-medium mb-4">
                    <span className="font-bold">Skills:</span>{" "}
                    {selectedExperience.skills}
                  </p>

                  <Description className="text-black/80 text-lg mb-6 leading-relaxed">
                    {selectedExperience.description}
                  </Description>

                  <div className="mt-6">
                    <p className="font-bold text-black text-xl mb-4">
                      Key Achievements:
                    </p>
                    <ul className="space-y-3">
                      {selectedExperience.achievements.map(
                        (achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-black/80 text-base"
                          >
                            <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </DialogPanel>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default ExperienceSection;
