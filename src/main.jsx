import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Guarantee landing page top position immediately on script load
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
