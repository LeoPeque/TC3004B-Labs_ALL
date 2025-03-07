import { Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Layout from './pages/Layout';

const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Perfil" element={<Perfil />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
