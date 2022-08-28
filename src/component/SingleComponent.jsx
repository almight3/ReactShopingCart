import React from 'react'
import './Component.css'
function SingleComponent({product,state,dispatch}) {
  const {cart} = state
  return (
    <div className="product-container">
       <img src={product.image} />
       <p>{product.title}</p>
       <h6>{product.price}</h6>
       {
        cart.some(c=>c.id===product.id) ?<button onClick={()=>{
          dispatch({
            type:"REMOVE_FROM_CART",
            payload:product
          })
        }}>Remove from Cart</button>:<button onClick={()=>dispatch({
          type:"ADD_TO_CART",
          payload:product
        })}>Add to Cart</button>
       }
    </div>
  )
}

export default SingleComponent