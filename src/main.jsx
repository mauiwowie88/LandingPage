import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Installation from './components/Installation';
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
