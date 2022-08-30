import React,{useContext} from 'react'
import {Context} from "../context/ProductContext"
import SingleComponent from '../component/SingleComponent'
import Filter from  "../component/Filter"
import './Page.css'
function Home() {
const {state,cartDispatch,filterState} = useContext(Context);  
const {products} = state;
const {sort,byCategory,bySearchQuery} = filterState;

console.log(bySearchQuery)
const filterProduct = ()=>{
 let filterProduct = products;
 if(sort){
   filterProduct = filterProduct.sort((a,b)=>(
   sort==="hightolow" ? b.price - a.price : a.price - b.price
   ));
 }

 if(byCategory){
  filterProduct = filterProduct.filter((p)=>p.category==byCategory);
  
 }
 if(bySearchQuery){
  filterProduct = filterProduct.filter((p)=>p.title.toLowerCase().includes(bySearchQuery.toLowerCase()))
}

 return filterProduct;

}


  return (
    <div className="home-product-container">
        <Filter />
        {filterProduct().map((product)=>(
          <SingleComponent product={product} state={state} dispatch={cartDispatch} />
        ))}
    </div>
  )
}

export default Home