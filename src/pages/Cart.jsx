import React,{useState,useContext,useEffect} from 'react'
import "./Page.css"
import { Context } from "../context/ProductContext"
import CartComponent from "../component/CartComponent"
function Cart() {
  const [total,setTotal] = useState();
  const {state,cartDispatch} = useContext(Context);
  const {cart} = state;
  
  useEffect(()=>{
  const totalPrice = cart.reduce((acc,curr)=>{
   acc = acc + Number(curr.price * curr.qty)
   return acc   
  },0) 
  setTotal(totalPrice)

  },[cart])

  return (
    <div className='cart-product-container'>
         <div className="cart-product">
            {cart.map((item)=>(
              <CartComponent item={item} dispatch={cartDispatch}/>
            ))}
         </div>
         <div className="cart-calculator">
            <h3 style={{margin:"0.4rem 1rem"}}>Totals Items ({cart.length})</h3>
            <h5 style={{margin:"0.4rem 1rem"}}>Total Price {total}</h5>
         </div>
    </div>
  )
}

export default Cart