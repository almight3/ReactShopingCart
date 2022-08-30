import React,{ useState,useReducer,useEffect } from 'react'
import {cartReducer,filterProduct} from '../Reducer/ProductReducer'
import axios from 'axios';
export const Context = React.createContext();
function ProductContext({children}) {
 
 const [state,cartDispatch] = useReducer(cartReducer,{
   cart:[],
   products:[]
 })  

 const fetchProduct = async()=>{
   const productData = await axios.get('https://fakestoreapi.com/products');
   cartDispatch({
      type:"ADD_PRODUCTS",
      payload:productData.data
   })
   console.log(productData.data)
 }

 const [filterState,filterDispatch] = useReducer(filterProduct,{
  sort:'',
  byCategory:'',
  byRating:'',
  bySearchQuery:''
 })
 useEffect(()=>{
  fetchProduct()
 },[]) 
 console.log(state)

  return (
    <Context.Provider value={{state,cartDispatch}}>
        {children}
    </Context.Provider>
  )
}

export default ProductContext