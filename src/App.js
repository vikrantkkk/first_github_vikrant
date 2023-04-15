import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './contact';
import Home from './home';
import Mainnav from './mainnav';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainnav />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<p>error page</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
