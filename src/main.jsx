import React, { Suspense, lazy, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';

const App = lazy(() => import('./App'));

const AppWrapper = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  // After the app is ready, wait a bit before removing the overlay to avoid the white flash.
  useEffect(() => {
    const timer = setTimeout(() => setIsAppReady(true), 0); // Matches your loading transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${isAppReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ backgroundColor: '#00040f' }}></div>

      <div className={`transition-opacity duration-1000 ${isAppReady ? 'opacity-100' : 'opacity-0'}`}>
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
