import React from 'react'
import './Component.css'
function SingleComponent({product,state,dispatch}) {
  return (
    <div className="product-container">
       <img src={product.image} />
       <p>{product.title}</p>
       <h6>{product.price}</h6>
       <button>Add to Cart</button>
    </div>
  )
}

export default SingleComponent