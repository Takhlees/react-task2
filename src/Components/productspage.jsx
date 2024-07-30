import React from 'react'
import Products from './products'
import Navbar from './navbar';
import Footer from './footer';

 const Productspage=()=> {
  return (
    <div>
       <Navbar/>
        <Products heading="Our Recent Products"/>
        <Footer/>
    </div>
  )
}

export default Productspage;
