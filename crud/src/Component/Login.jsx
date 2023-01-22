// import React from 'react'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export const Login = () => {
  let navigate = useNavigate();
  const [auth, setauth] = useState({
    email: "",
    phone: "",
    password: ""
  })
  const handleChange = (e) => {
    setauth({ ...auth, [e.target.name]: e.target.value })
    //console.log(auth)
  }

  const handleLogin = async () => {
    try {
      let response = await axios.post(`http://localhost:5000/loginData`,
        auth);
      let res = response.data;
      console.log(res.status)
      alert(res.message)
      if (res.status == 'success') {
        navigate("/home");
      }
      // return true;
      else return false;
    } catch (err) {
      console.log("err->", err.response.data)
      return false;
    }
  }

  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6  bg-white shadow-lg mt-4 mb-3 p-4">
            <h2 className="text-center mt-3">Login Here</h2>
            <p className="text-center p-2 text-success">Enter Login details to get access</p>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" >Email</label>
              <input onChange={handleChange} type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" >Phone</label>
              <input onChange={handleChange} type="text" className="form-control" name="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
              <input onChange={handleChange} type="password" className="form-control" name="password" />
            </div>
            <p>Don't have an account? <Link to="/" className="text-danger">Sign up</Link> here</p>
            <button type="submit" onClick={handleLogin} className="btn btn-success">Login</button>
            {/*<Link to="/adddetail" type="submit" className="btn btn-success">Login</Link>*/}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}
