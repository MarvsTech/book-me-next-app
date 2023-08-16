import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './config/UserContext';
// import { UserProvider } from './config/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <App />
    </UserProvider>
);
