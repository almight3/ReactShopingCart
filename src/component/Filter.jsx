import React,{useContext} from 'react'
import {Context} from "../context/ProductContext"

function Filter() {
 const {filterDispatch} = useContext(Context) 
 const handelSort = (type)=>{
  console.log(type)
  filterDispatch({
    type:"SORT_BY_PRICE",
    payload:type
  })
}
 const handelCategory = (category)=>{
  console.log(category)
  filterDispatch({
    type:"FILTER_BY_CATEGORY",
    payload:category
  })
 }
  return (
    <div className='filter-container'>
   <span>
   <label>Sort by Price</label>
      <select name="cars" id="cars" onChange={(e)=>handelSort(e.target.value)}>
        <option value="hightolow">High to Low</option>
        <option value="lowtohigh">Low to High</option>
      </select>
   </span>
   <span>
   <label>Search by Category</label>
      <select name="cars" id="cars" onChange={(e)=>handelCategory(e.target.value)}>
        <option value="men's clothing">Mens</option>
        <option value="women's clothing">Womens</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
   </span>
   <label onClick={()=>{
    filterDispatch({
      type:"CLEAR_FILTER"
    })
   }}>Clear Filter</label>
  </div>
  )
}

export default Filter