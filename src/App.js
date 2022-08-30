import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import ProductContext from './context/ProductContext'
function App() {
  return (
    <BrowserRouter>
      <ProductContext>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
      </ProductContext>
    </BrowserRouter>
  )
}

export default App