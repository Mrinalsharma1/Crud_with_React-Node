import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }
  const onsubmit = async (e) => {
    e.preventDefault();
    const res1 = await fetch("http://localhost:5000/addData", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)

    })
    const result = await res1.json();
    console.log(result);

  }
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6  bg-white shadow-lg mt-4 mb-3 p-4">
            <h2 className="text-center mt-3">Sign Up Here</h2>
            <p className="text-center p-2 text-success">Enter Your Details To Login</p>
            <form onSubmit={onsubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Conform Password</label>
                <input type="text" className="form-control" />
              </div>
              <p>Already have an account?  <Link to="/login" className="text-danger">Login</Link> here</p>
              <button type="submit" className="btn btn-success">Signup</button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}
