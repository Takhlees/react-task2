import React from 'react'
import { Link } from 'react-router-dom'

const Footer=()=> {
  return (
    <div>
        <footer className='footer'>
        <div className="container text-center">
            <div className="row">
              <div className="col">
                <h5>E-COMMERCE STORE</h5>
                <p>At Our Ecommerce Store, we are passionate about providing exceptional products and an unparalleled shopping experience. We strive to offer Link curated selection of high-quality items that meet the diverse needs and tastes of our valued customers.</p>
              </div>
              <div className="col">
                <h5>LINKS</h5>
                <ul className="list-unstyled">
                    <li>
                        <Link className="link" to="/home" >Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/productspage" >Products</Link>
                    </li>
                    <li>
                        <Link className="link" to="/cart" >Cart</Link>
                    </li>
                    <li>
                        <Link className="link" to="/contactus" >Contact Us</Link>
                    </li>
                </ul>
              </div>
              <div className="col">
                <h5>LINKS</h5>
                <ul className="list-unstyled">
                    <li>
                        <Link className="link" to="#!" >Facebook</Link>
                    </li>
                    <li>
                        <Link className="link" to="#!" >Instagram</Link>
                    </li>
                    <li>
                        <Link className="link" to="#!" >Twitter</Link>
                    </li>
                    <li>
                        <Link className="link" to="#!" >LinkedIn</Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            <Link className="link" to="/" >© 2020 Copyright: ecommerce-store.com</Link>
          </div>
      </footer>
      
    </div>
  )
}

export default Footer;