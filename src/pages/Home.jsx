import React,{useContext} from 'react'
import {Context} from "../context/ProductContext"
import SingleComponent from '../component/SingleComponent'
import './Page.css'
function Home() {
const {state,cartDispatch} = useContext(Context)  
  return (
    <div className="home-product-container">
        {state.products.map((product)=>(
          <SingleComponent product={product} state={state} dispatch={cartDispatch} />
        ))}
    </div>
  )
}

export default Home