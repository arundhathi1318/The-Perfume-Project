// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// We will use App.css for all our primary styles, imported in App.jsx
// You can remove or clear out src/index.css if Vite created one with extensive styling

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);