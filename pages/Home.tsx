
import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
            Available for hire
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Hi, I’m Nafis <span className="text-blue-600 dark:text-blue-500">a full-stack web developer.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            I build clean, responsive websites and web apps using React and Node.js, helping businesses and startups turn their ideas into working products.

          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* <Link
              to="/projects"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 "
            >
              View Projects
            </Link> */}
            <div className="flex items-center justify-center ">
              <Link
                to="/projects"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
              >
                View Projects
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1"
              >
                Let's Talk
              </Link>
            </div>
            <div className="flex items-center justify-center ">

              <a
                href="https://drive.google.com/file/d/1kJxp2ZtfsQIFE4YKV1gqNozAbEWnuwPE/view?usp=sharing" target="_blank"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700   rounded-xl font-semibold flex items-center gap-2  transition-all transform hover:-translate-y-1 active:scale-95 shadow-sm"
                // className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-center"
                >
                <Download size={20} />
                 Resume
              </a>

            </div>



          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-400 opacity-10 dark:opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-indigo-400 opacity-10 dark:opacity-5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Home;
