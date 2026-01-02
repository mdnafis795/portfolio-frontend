
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", ]
    },
    {
      title: "UI & UX",
      skills: ["Responsive Design", "Mobile-First Layouts" ]
    },
     {
      title: "Development",
      skills: ["API Integration", "Form Validation", "Git", "GitHub", "Vite" ]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL"]
    }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Tools & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
