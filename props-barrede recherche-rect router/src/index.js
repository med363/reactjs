import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './style.css'
import Home from './pages/Home';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import About from './pages/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
            <Routes>
                    <Route path="/" element={<App />} /> {/* http://localhost:3000  */}
                    <Route path="/home" element={<Home />} />  {/* http://localhost:3000/home  */}
                    <Route path="/about" element={<About />} />  {/* http://localhost:3000/about  */}
            </Routes>
    </BrowserRouter>


);


