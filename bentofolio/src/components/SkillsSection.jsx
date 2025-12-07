import {
  ArrowDownRight,
  Code2,
  Database,
  Wrench,
  GraduationCap,
} from "lucide-react";


const SkillsSection = () => {
  return (
    <div className="mb-12 mx-4 md:mx-8">

      <h2 className="text-3xl font-bold text-[#E1FF4A] mb-6">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-auto">
        {/* Languages & Frameworks */}
        <div className="md:col-span-2 lg:col-span-2 border border-white/20 rounded-2xl p-5 hover:border-[#E1FF4A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E1FF4A]/10 bg-gradient-to-br from-white/[0.02] to-transparent group">
          <div className="flex items-center gap-2 mb-3">
            <Code2
              size={20}
              className="text-[#E1FF4A] group-hover:rotate-12 transition-transform duration-300"
            />
            <h3 className="text-white font-semibold text-lg">
              Languages & Frameworks
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              "C",
              "C++",
              "C#",
              "Java",
              "Python",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "Redux",
              "HTML5",
              "CSS3",
              "Tailwind",
              "Bootstrap",
              "Vite",
              "Firebase",
              "Supabase",
              "REST APIs",
              "Gemini AI",
            ].map((skill, i) => (
              <span
                key={`lang-${i}`}
                className="px-2.5 py-1 rounded-2xl border border-white/20 text-white/90 hover:border-[#E1FF4A] hover:text-[#E1FF4A] hover:bg-[#E1FF4A]/5 transition-all duration-200 text-sm font-medium cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="border border-white/20 rounded-2xl p-5 hover:border-[#E1FF4A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E1FF4A]/10 bg-gradient-to-br from-white/[0.02] to-transparent group">
          <div className="flex items-center gap-2 mb-3">
            <Database
              size={20}
              className="text-[#E1FF4A] group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-white font-semibold text-lg">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["MySQL", "PostgreSQL", "MongoDB", "SQL"].map((skill, i) => (
              <span
                key={`db-${i}`}
                className="px-2.5 py-1 rounded-2xl border border-white/20 text-white/90 hover:border-[#E1FF4A] hover:text-[#E1FF4A] hover:bg-[#E1FF4A]/5 transition-all duration-200 text-sm font-medium cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div className="md:row-span-2 border border-white/20 rounded-2xl p-5 hover:border-[#E1FF4A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E1FF4A]/10 bg-gradient-to-br from-white/[0.02] to-transparent group">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap
              size={20}
              className="text-[#E1FF4A] group-hover:rotate-12 transition-transform duration-300"
            />
            <h3 className="text-white font-semibold text-lg">Coursework</h3>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              "Operating Systems",
              "Computer Networks",
              "Data Structures",
              "Algorithms",
              "OOP",
              "Databases",
              "Data Analytics",
            ].map((skill, i) => (
              <span
                key={`course-${i}`}
                className="px-2.5 py-1.5 rounded-2xl border border-white/20 text-white/90 hover:border-[#E1FF4A] hover:text-[#E1FF4A] hover:bg-[#E1FF4A]/5 transition-all duration-200 text-sm font-medium cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* DevOps & Tools */}
        <div className="md:col-span-2 lg:col-span-3 border border-white/20 rounded-2xl p-5 hover:border-[#E1FF4A]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E1FF4A]/10 bg-gradient-to-br from-white/[0.02] to-transparent group">
          <div className="flex items-center gap-2 mb-3">
            <Wrench
              size={20}
              className="text-[#E1FF4A] group-hover:rotate-12 transition-transform duration-300"
            />
            <h3 className="text-white font-semibold text-lg">DevOps & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Git",
              "GitHub",
              "GitLFS",
              "AWS S3",
              "Postman",
              "Vercel",
              "Netlify",
              "Render",
              "GitHub Actions",
              "VS Code",
              "Visual Studio",
              "Eclipse",
              "Figma",
            ].map((skill, i) => (
              <span
                key={`devops-${i}`}
                className="px-2.5 py-1 rounded-2xl border border-white/20 text-white/90 hover:border-[#E1FF4A] hover:text-[#E1FF4A] hover:bg-[#E1FF4A]/5 transition-all duration-200 text-sm font-medium cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;