import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
// Dynamically import the App component
const App = lazy(() => import('./App'));
import './index.css';
import './i18n';

// Your Loading component remains the same
const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-primary text-white">
      ...is loading
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
