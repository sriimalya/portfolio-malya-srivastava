import { useContext } from 'react';

const SkillsExperienceSection = () => {
  const skills = [
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 mx-8">
      <div className="bg-[#E1FF4A] rounded-3xl p-8">
        <h2 className="text-[#E1FF4A] text-xl font-medium mb-6 inline-block px-4 py-1 bg-zinc-900 rounded-full">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-1 rounded-full hover:scale-105 transition-transform duration-200 border border-zinc-900 border-1 text-black"
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
  );
};

export default SkillsExperienceSection;