import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {Context} from "../context/ProductContext"
import "./Component.css"
function Navbar() {
  const {filterDispatch} = useContext(Context)
  return (
    <div className="nav-container">
      <h2>Shopping Cart</h2>
      <li>
      <input type="text" placeholder="Search" onChange={(e)=>{
        filterDispatch({
          type:"FILTER_BY_SEARCHQUERY",
          payload:e.target.value
        })
      }}/>
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