
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  ">
        <div >
          <img
            src="Nafis.png"
            alt="Profile"
            // className="rounded-2xl shadow-2xl border-8 border-white dark:border-slate-800"
            className="rounded-2xl shadow-2xl border-8 border-white dark:border-slate-800 "
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Hi, I’m Nafis — a full-stack web developer focused on building practical, real-world websites and web apps.
              I work with React, Node.js, and PostgreSQL to create fast, clean, and easy-to-use web applications. I enjoy building both the frontend people interact with and the backend that makes everything work smoothly behind the scenes.
            </p>
            <p>
              Before moving fully into web development, I worked in industrial automation and PLC programming, which taught me how to think logically, handle real systems, and build things that don’t break in the real world — not just in tutorials.
            </p>
            <p>
              I’ve built and deployed websites for gyms, restaurants, and schools, handling everything from UI design to backend APIs and database integration.
              Right now, I’m focused on growing as a full-stack developer and working with businesses and teams that need reliable, modern web solutions.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1-2</div>
              <div className="text-sm text-slate-500 dark:text-slate-500">Years Exp</div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div className="text-sm text-slate-500 dark:text-slate-500">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
