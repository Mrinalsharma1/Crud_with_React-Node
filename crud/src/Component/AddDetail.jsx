import React from "react";
import { useState } from "react"
const AddDetail = () => {
  const [detail, setdetail] = useState({
    fname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pin: "",
    address: "",
    date: ""
  });
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setdetail({ ...detail, [e.target.name]: e.target.value })
    setFile({ ...file, [e.target.name]: e.target.value })
    console.log(file)
    console.log(detail)
  }
  const handleUserData = () => {

  }
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8  bg-white shadow-lg mt-4 mb-3 p-4">
            <h2 className="text-center mt-3">Add Details</h2>
            <p className="text-center p-2 text-primary">Enter Your details here</p>
            <form>
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
              <p><strong>Document Section :</strong></p><hr />
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Addhar Card</label>
                <input className="form-control" type="file" onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Photo</label>
                <input className="form-control" type="file" onChange={handleChange} />
                <img src={file} />
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Date</label>
                <input className="form-control" type="date" name="date" onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleUserData}>Submit</button>
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