import React, { Suspense, lazy, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensures TailwindCSS is loaded
import './i18n';

const App = lazy(() => import('./App'));

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay or wait for other app readiness checks
    const timer = setTimeout(() => setLoading(false), 0); // Adjust delay as necessary
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div className={`fixed inset-0 z-50 flex justify-center items-center bg-primary text-white transition-opacity duration-900 ${loading ? 'opacity-100' : 'opacity-0'}`} aria-hidden={!loading}>
      </div>

      {/* App Content */}
      <div className={`flex-grow transition-opacity duration-900 ${!loading ? 'opacity-100' : 'opacity-0'}`}>
        <Suspense fallback={<div aria-hidden="true"></div>}>
          <App />
        </Suspense>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
