import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/home/Home'
import Index from './views/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lottery from './views/lottery/Lottery'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lottery" element={<Lottery />} />
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,
)
