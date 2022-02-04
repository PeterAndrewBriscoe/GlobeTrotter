import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Search from './pages/Search'
import Login from './pages/Login'
import './index.css';

ReactDOM.render(
   <React.StrictMode>
   	<BrowserRouter>
      	<Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Search />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);


