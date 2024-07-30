import React from 'react'
import Navbar from './navbar';

 const Login=()=> {
  return (
    <div>
        <Navbar/>
      <form className="login">
        <div style={{textAlign: "center"}}>
        <img src="favicon (1).png" alt="image" height="50px" width="50px"/> 
        <h3>LOGIN</h3>
        <p>Welcome Back! Login to your account</p></div>
        <div className='form'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
    </div>
        <div style={{textAlign: "center"}}>
        <p style={{margin: "30px"}}>Don't have account? Signup</p>
        <button type="submit" class="btn btn-outline-light">Login</button>
    </div>
    </form>
    </div>
  )
}

export default Login
