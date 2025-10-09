import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutWeb from './components/AboutWeb.tsx'
import NationalDay from './components/NationalDay.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about-web' element={<AboutWeb />} />
        <Route path='/national-day' element={<NationalDay />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
