import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import Footer from './components/footer/Footer.jsx'
import Resturant from './components/resturant/Resturant.jsx'
import PageNotFound from './components/pagenotfound/PageNotFound.jsx'
import Details from './components/details/Details.jsx'
export default function App() {
  return (
    <>
   
    <Navbar/>
    <Routes>
    <Route path="/resturant" element={<Resturant/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/:id" element={<Details/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    
    </Routes>
    
    <Footer/>
 
    
    </>
  )
}

