import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Home/>
);

window.renderHomeComponent = function(containerId) {
    console.log(`Attempting to render inside container: ${containerId}`);
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found`);
        return;
    }
   
    const root = ReactDOM.createRoot(container);
    root.render(<Home />);
    console.log('Component should be rendered');
};

