import React from 'react'
import {Link} from 'react-router-dom'


 const Navbar=()=> {
  return (
    <div>
       <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
            <img src="/cart.png" alt="cart" width="40px" height="40px"/>            
          <Link className="navbar-brand">E-Commerce Store</Link>
          <div class="bars" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productspage" >Products</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link"to="/cart" >Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/contactus" >Contact Us</Link>
              </li>
            </ul>
            <Link className="nav-link"to="/signup">
                <button type="button" className="btn btn-outline-light" >Register</button>
            </Link>
            <Link className="nav-link"to="/login">
                <button type="button" className="btn btn-outline-light" >Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar