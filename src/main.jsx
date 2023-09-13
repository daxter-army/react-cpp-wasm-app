import React from 'react';
import ReactDOM from 'react-dom/client';

import WASMProvider from '@context/wasmContext';
import NotesProvider from '@context/notesContext';

import App from './App.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WASMProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </WASMProvider>
  </React.StrictMode>,
)