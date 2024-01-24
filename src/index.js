import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Home/>
);

window.renderHomeComponent = function(containerId) {
    const container = document.getElementById(containerId);
    const root = ReactDOM.createRoot(container);
    root.render(<Home />);
};

