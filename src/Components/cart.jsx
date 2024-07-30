import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

 const Cart=()=> {
  return (
    <div>
      <Navbar/>
      <h2 style={{margin:"40px", textAlign: "center"}}>Your Add to Cart</h2>
      <div class="cardc" style={{margin:"20px"}}>
        <div class="d-flex p-2">
          <div>
          <img src="/image3.png" alt="image 3" height="120px" width="120px"/>
          </div>
          <div style={{margin:"20px"}}><p>Name</p>
            <p>Iphone</p></div>
          <div style={{margin:"20px"}}><p>Color</p>
            <p>Red</p></div>
          <div style={{margin:"20px"}}><p>Quantity</p>
            <p>1</p></div>
            <div style={{margin:"20px"}}> <p>Price</p>
                <p>350,999 Rs</p></div>
         
          <div style={{margin:"20px"}}><p>Total</p>
            <p>350,999 Rs</p></div>
        </div>
      </div>
      <div class="cardc" style={{margin:"20px"}}>
        <div class="card-bodyy" >
          <p>Order total: 350,999 Rs</p>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-outline-light" style={{color: "black", backgroundColor: "rgb(240, 237, 237)", margin:"20px"}}>Continue Shopping</button>
        <button type="button" class="btn btn-outline-light" style={{backgroundColor: "#F57224", margin:"20px"}}>Add to cart</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart