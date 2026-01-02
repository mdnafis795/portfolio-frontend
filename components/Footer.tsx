
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-2">Md Nafis Portfolio</h2>
            <p className="text-sm">Building modern web applications with React, Node.js, and clean UI.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/mdnafis795" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/md-nafis/" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/be_a_nafis?utm_source=qr&igsh=MWdlbzU1NzVrbDA5OA==" target="_blank" className="hover:text-blue-400 transition-colors">IG</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} <a href="https://github.com/mdnafis795" target="_blank" className="hover:text-blue-400 transition-colors">Md</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
