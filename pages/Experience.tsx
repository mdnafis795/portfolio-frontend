
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Self-Directed Learning.',
    role: 'Web Development Projects',
    period: '2024 - Present',
    type: 'job',
      desc: "Built responsive websites with React, HTML, CSS, and JavaScript while delivering real-world projects for schools, gyms, and restaurants and implementing backend APIs using Node.js.."
    },
    {
      role: "PLC Programmer",
      company: "Falcon Autotech",
      period: "2024 - Present",
      desc: "Working as a PLC Programmer handling industrial automation tasks.Developing and modifying PLC logic using ladder diagrams and function blocks.Involved in panel testing, I/O mapping, troubleshooting, and on-site support.Collaborating with engineers to implement automation solutions based on project requirements."
    }
  ];

  const education = [
    {
      degree: "B.tech in Electrical and Electronics Enigneering",
      school: "Galgotias College of Engineering and Technology",
      period: "2020 - 2024"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center">
          <span className="mr-4 p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </span>
          Professional Journey
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-400 rounded-full"></div>
              <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1">{exp.period}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
              <div className="text-slate-500 dark:text-slate-400 font-medium mb-3">{exp.company}</div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center">
          <span className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
          </span>
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-1">{edu.period}</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
              <div className="text-slate-600 dark:text-slate-400">{edu.school}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
