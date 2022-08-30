import React,{useState} from 'react'
import DeleteButton from "../assets/delet.png"
function CartComponent({item,dispatch}) {
 console.log("cart quantity",item,item.qty + 1)
  return (
    <div className="cart-component">
    <img src={item.image} />
    <p>{item.title}</p>
    <h6>{item.price}</h6>
    <h6>{item.rating.rate}</h6>
    <span>
    <button
    onClick={()=>{
      dispatch({
        type:"CHANGE_QUANTITY",
        payload:{
          id:item.id,
          qty:item.qty + 1
        }
      })
    }}
    >+</button>
    <input value={item.qty}/>
    <button
    onClick={()=>{
     if(item.qty>1){
      dispatch({
        type:"CHANGE_QUANTITY",
        payload:{
          id:item.id,
          qty:item.qty - 1
        }
      })
     } 
    }}
    >-</button>
    </span>
     <img src={DeleteButton} style={{width:"15px",height:"15px"}} onClick={()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:item
        })
     }}/>
    </div>
  )
}

export default CartComponent