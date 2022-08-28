import React,{ useState,useReducer,useEffect } from 'react'
import { faker } from '@faker-js/faker';
import {cartReducer} from './ProductContext'
import axios from 'axios';


export const Context = React.createContext();

function ContextReducer({children}) {
 
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

export default ContextReducer