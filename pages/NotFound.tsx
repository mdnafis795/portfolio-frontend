
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] text-center px-4">
      <div>
        <h1 className="text-9xl font-extrabold text-slate-200">404</h1>
        <p className="text-2xl font-bold text-slate-900 mt-4">Page not found</p>
        <p className="text-slate-600 mt-2 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
