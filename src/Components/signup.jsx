import React from 'react'
import Navbar from './navbar';

 const Signup=()=> {
  return (
    <div>
        <Navbar/>
       <form className='signup'>
        <div style={{textAlign: "center"}}><img src="/favicon (1).png" alt="image" height="50px" width="50px"/> 
            <h3>Register</h3>
            <p>Register Yourself!</p></div>
        <div className='form' >
            <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
        </div>
        <div style={{textAlign: "center"}}>
        <p style={{margin: "30px"}}>Have an account? Login</p>
        <button type="submit" class="btn btn-outline-light" >Register</button>
    </div>
      </form>
    </div>
  )
}

export default Signup;
