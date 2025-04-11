import { useContext } from 'react';
import { ArrowDownRight } from 'lucide-react';


const SkillsExperienceSection = () => {
  // Organized skills into proper categories
  const devSkills = [
    // Programming Languages
    "Java", "Python", "JavaScript", "C++", "C", "C#",

    // Frontend Development
    "React.js", "HTML", "Tailwind CSS",

    // Backend Development
    "Node.js", "Express.js",

    // Databases
    "SQL", "MongoDB",

    // Tools
    "Git", "GitHub"
  ];

  const designSkills = [
    "Figma", "UI Design", "UX Design", "User Research",
    "Wireframing", "Prototyping"
  ];

  const otherSkills = [
    "Computer Networking", "Operating Systems",
    "Unity3D", "WordPress"
  ];

  const currentlyLearning = [
    "Next.js", "TypeScript", "Three.js"
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mb-12 mx-4 md:mx-8">
      {/* Skills Card */}
      <div className="bg-[#E1FF4A] rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Skills Title */}
          <h2 className="text-2xl font-bold text-zinc-900">Skills & Expertise</h2>
          
          {/* Currently Learning */}
          <div className="relative group flex-shrink-0">
            <div className="px-4 py-2 rounded-full bg-zinc-900 text-[#E1FF4A] flex items-center gap-2 hover:bg-zinc-800 transition-colors cursor-pointer">
              <span className="font-medium">Currently Learning</span>
              <div className="relative flex items-center">
                <div className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse mr-1"></div>
                <span className="text-xs">{currentlyLearning.length} skills</span>
              </div>
            </div>
            
            {/* Learning Items - appear on hover */}
            <div className="absolute z-10 hidden group-hover:block right-0 mt-2 p-4 bg-zinc-900 rounded-xl border border-[#E1FF4A]/50 w-64 shadow-lg">
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[#E1FF4A] text-zinc-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills List - Organized by Category */}
        <div className="space-y-6">
          {/* Development Skills */}
          <div>
            <h3 className="text-zinc-900 font-medium mb-3 flex items-center gap-1 font-semibold">
              Development
              <span><ArrowDownRight size={18} />
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {devSkills.map((skill, i) => (
                <span
                  key={`dev-${i}`}
                  className="px-3 py-1 rounded-full border border-zinc-900 text-black hover:scale-105 transition-transform duration-200 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div>
            <h3 className="text-zinc-900 font-medium mb-3 flex items-center gap-1 font-semibold">
              Design
              <span><ArrowDownRight size={18} />
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {designSkills.map((skill, i) => (
                <span
                  key={`design-${i}`}
                  className="px-3 py-1 rounded-full border border-zinc-900 text-black hover:scale-105 transition-transform duration-200 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-zinc-900 font-medium mb-3 flex items-center gap-1 font-semibold">
              Other
              <span><ArrowDownRight size={18} />
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill, i) => (
                <span
                  key={`other-${i}`}
                  className="px-3 py-1 rounded-full border border-zinc-900 text-black hover:scale-105 transition-transform duration-200 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Card */}
      <div className="border border-1 border-white rounded-3xl p-6 transform hover:border-[#E1FF4A] transition-colors duration-300">
        <h2 className="text-xl font-medium mb-6 inline-block px-4 py-1 bg-white text-black rounded-full">Experience</h2>
        {experience.map((exp, i) => (
          <div key={i} className="mb-6 last:mb-0">
            <div className="flex items-top gap-2 mb-2">
              <div className="w-3 h-3 text-[#E1FF4A] mt-1 flex-shrink-0">✦</div>
              <h3 className="text-lg text-[#E1FF4A]">{exp.title}</h3>
            </div>
            <div className="ml-5">
              <p className="font-bold text-sm">{exp.company}</p>
              <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
              <p className="text-sm text-gray-400 mt-1">Skills: {exp.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsExperienceSection;