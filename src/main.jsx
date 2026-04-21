import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import i18n, { initI18n } from './config/i18n';

// Inicializar i18next antes de renderizar o app
(async () => {
  await initI18n();
  await i18n.ready;

  const container = document.getElementById('root');
  if (!container) throw new Error('Failed to find the root element');

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();
