import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Products() {

let [products,setProducts]=useState([]);

const getProducts= async()=>{
  let response= await fetch('https://forkify-api.herokuapp.com/api/search?q=poke');
  let data= await response.json();
  setProducts(data);
} 

useEffect( ()=>{
  getProducts();
},[])
   
  return (
    <>
   
  <div className='row'>
    {
      products?.recipes?.map((ele)=>{
        return(
          <div className='col-md-4' key={ele.recipe_id}>
            <Link to={`/${ele.recipe_id}`} >{ele.title}</Link>
            <img src={ele.image_url} className='w-100'/>
          </div>
        ) 
      }
    )}
  </div>
    
    </>
  )
}
