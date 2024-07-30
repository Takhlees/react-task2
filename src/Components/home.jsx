import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Products from './products';

const Home=()=> {
  return (
    <div>
        <Navbar/>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/Image1.jpeg" class="d-block w-100" alt="Image 1"/>
          </div>
          <div class="carousel-item">
            <img src="/Image10.png" class="d-block w-100" alt="Image 2"/>
          </div>
          <div class="carousel-item">
            <img src="/Image11.png" class="d-block w-100" alt="Image 3"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Products heading="Our Previous Products"/>
      <Footer/>
    </div>
  )
}

export default Home;