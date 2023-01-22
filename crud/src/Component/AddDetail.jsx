import axios from "axios";
import React from "react";
import { useState } from "react"
import Navbar from "./Navbar";
const AddDetail = () => {
  const [detail, setdetail] = useState({
    fname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pin: "",
    address: "",
    role: "",
  });

  const handleChange = (e) => {
    setdetail({ ...detail, [e.target.name]: e.target.value })
    console.log(detail)
  }

  // const onChangeImage = (e) => {
  //   console.log("aaa")
  //   setdetail({ ...detail, addharcard: e.target.files[0] })
  //   console.log(e.target.files[0])
  // }
  const handleUserData = async (e) => {
    try {
      // e.preventDefault();
      // const formdata = new FormData();
      // formdata.append('productname', detail.fname)
      // formdata.append('productimage', detail.addharcard, detail.addharcard.name)
      // console.log(formdata)

      axios({
        method: 'POST',
        url: 'http://localhost:5000/adddetails',
        data: detail,
      }).then(e => console.log("success", e.status === 200 ? alert("Data Added successfully ") : alert("not success")))

    } catch (e) {
      console.log("-->>", e)
    }
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8  bg-white shadow-lg mt-4 mb-3 p-4">
            <h2 className="text-center mt-3">Add Details</h2>
            <p className="text-center p-2 text-primary">Enter Your details here</p>
            <form onSubmit={handleUserData} encType="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" className="form-control" name="fname" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" onChange={handleChange} />
              </div>
              <p><strong>Address Section :</strong></p><hr />
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                <input type="text" className="form-control" name="city" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">State</label>
                <input type="text" className="form-control" name="state" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Pin</label>
                <input type="number" className="form-control" name="pin" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                <input type="text" className="form-control" name="address" onChange={handleChange} />
              </div>
              {/*<p><strong>Document Section :</strong></p><hr />
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Addhar Card</label>
                <input defaultValue={detail.addharcard} className="form-control" type="file" name="addharcard" onChange={onChangeImage} />
              </div>

              {/*<div className="mb-3">
                <label htmlFor="formFile" className="form-label">Photo</label>
                <input className="form-control" type="file" name="photo" onChange={handleChange} />
            </div>*/}

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Job Role</label>
                <input className="form-control" type="text" name="role" onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
              {/*<button type="submit" value="clear" className="btn btn-secondary">clear</button>*/}
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}
export default AddDetail;