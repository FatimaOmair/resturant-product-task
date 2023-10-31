import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'


export default function Details() {
    const {id}=useParams()

    let [products,setProducts]=useState([]);

     const getProducts= ()=>{
          fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
       .then ((resp)=>resp.json()).then((result)=>{
        setProducts(result.recipes.find(ele=>ele.recipe_id===id))
       
       })
      } 
      
      useEffect( ()=>{
        getProducts();
      },[])

console.log(products)
  return (
    <>
    <div>{products?.image_url}</div>
    <div>{products?.title}</div>
    </>
  )
}
