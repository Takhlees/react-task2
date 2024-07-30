import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

 const Contactus=()=> {
  return (
    <div>
        <Navbar/>
      <form className="contactform" >
        <h3>Contact Us</h3>
        <div className="mb-3">
            <label for="exampleInputName" className="form-label">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           
          </div>
          <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           </div>
        <div className="mb-3">
          <label for="exampleInputMessage" className="form-label">Message</label>
          <textarea className="form-control" id="exampleInputPassword1"></textarea>
        </div>
        
        <button type="submit" className="btn btn-outline-light" >Submit</button>
      </form>
      <Footer/>
    </div>
  )
}

export default Contactus
