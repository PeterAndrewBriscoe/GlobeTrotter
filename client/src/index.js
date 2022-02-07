import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Search from './pages/Search'
import Login from './pages/Login'
import Detail from './pages/Detail'
import History from './pages/History'

ReactDOM.render(
   <React.StrictMode>
   	<BrowserRouter>
      	<Routes>
            <Route path="/" element={<App />}>
               <Route index element={<Search />} />
               <Route path='/detail' element={<Detail />} />
               <Route path="/login" element={<Login />} />
               <Route path="/history" element={<History />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);


