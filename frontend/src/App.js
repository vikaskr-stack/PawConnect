import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Adopt from './pages/Adopt'
import VetTips from './pages/VetTips'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/vettips" element={<VetTips />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App