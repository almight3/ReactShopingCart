import React from 'react'
import {Link} from "react-router-dom"
import "./Component.css"
function Navbar() {
  return (
    <div className="nav-container">
      <h2>Shopping Cart</h2>
      <li>
      <input type="text" placeholder="Search" />
      </li>
      <li>
       <Link to="/home" style={{color:"inherit",textDecoration:"none"}}>Home</Link>
     </li>
     <li>
       <Link to="/cart" style={{color:"inherit",textDecoration:"none"}}>Cart</Link>
      </li>

    </div>
  )
}

export default Navbar