import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';

// Define a Loading component using TailwindCSS classes
const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      ...is loading
    </div>
  );
};

// Use the Loading component as the fallback
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
