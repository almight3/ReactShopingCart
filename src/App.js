import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
           <Route path="/" element={<Navigate to="/home" />} />
           <Route path="/home" element={<Home />} />
           <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App