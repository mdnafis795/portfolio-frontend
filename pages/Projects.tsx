
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "LUMIÈRE & STONE Cafe",
      description: "A full-scale online store with Stripe integration and real-time inventory management.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      image: "/cafe.png",
      url: "https://restaurrendbymd.netlify.app/"
    },
    {
      title: "Saraswati Vidya Mandir",
      description: "Complex analytics dashboard featuring d3.js visualizations and multi-tenant auth.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      image: "/school.png",
     url: "https://schoolwebbymd.netlify.app"
    },
    {
      title: "GymHero",
      description: "Real-time cryptocurrency monitoring tool with WebSocket price alerts.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      image: "/Gym.png",
      url: "https://gymherobynafis.netlify.app"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 font-bold text-slate-900 dark:text-white mb-2"> {project.title}</a>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
