import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot instead of ReactDOM
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

if (rootElement) {
    // Create a root
    const root = createRoot(rootElement);
    // Render your App component
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Root element not found');
}


