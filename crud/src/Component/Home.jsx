import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
// import { FaBeer } from 'react-icons/fa';
import { AiFillDelete, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Home() {
    const [data, setdata] = useState([])

    // state for view the data
    const [view, setview] = useState([])

    // state for update the data
    const [update, setUpdate] = useState(
        { _id: '', fname: '', email: '', phone: '', city: '', state: '', pin: '', address: '', role: '' }
    )

    useEffect(() => {
        axios.get(`http://localhost:5000/fetchdata`)
            .then(res => {
                const result = res.data;
                setdata(result);
            }).catch(e => console.error(e))
    }, [])



    // below code for view details
    const clicked = (e) => {
        setview(e)
    }

    const updateUser = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/updateuser/${update._id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(update)
        }).then(res => { return res.json() })
            .then((result) => {
                if (result.success === false) {
                    return 0
                } else {
                    return 0
                }
            })
            .catch(error => { return console.log(error) })

        //update data from front end
        let newArray = []
        data.forEach((e) => {
            if (e._id !== update._id) {
                newArray.push(e)
            } else {
                let upd_index = data.findIndex((obj => obj._id === e._id));
                data[upd_index]._id = update._id
                data[upd_index].fname = update.fname
                data[upd_index].email = update.email
                data[upd_index].phone = update.phone
                data[upd_index].city = update.city
                data[upd_index].state = update.state
                data[upd_index].pin = update.pin
                data[upd_index].address = update.address
                data[upd_index].role = update.role
                if (update.Status === "true") {
                    data[upd_index].Status = true

                } else {
                    data[upd_index].Status = false

                }
                newArray.push(e)

            }
        })
        setdata(newArray)
    }

    // below code for update details
    const updateData = (e) => {
        setUpdate(e)
    }
    // console.log(update)

    const onchangeupdatehandler = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value.trim() })
        // console.log(update)
    }


    const deleteData = (id) => {
        let newArray = []
        // const userdata = id;
        // console.log(userdata)
        // console.log(id._id)

        fetch(`http://localhost:5000/deleteuser/${id._id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        }).then(res => { return res.json() })
            .then((result) => {
                if (result.success === false) {
                    return alert("not deleted")
                }
            })
            .catch(error => { return console.log(error) })

        //delete data from front end

        data.forEach((e) => {
            if (e._id !== id._id) {
                newArray.push(e)
            }
        })
        setdata(newArray)

    }


    return (
        <>
            <Navbar />
            {/*modal for view */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">View Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                <input type="text" value={view.fname} className="form-control" disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input type="email" value={view.email} className="form-control" disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                <input type="text" value={view.phone} className="form-control" disabled />
                            </div>
                            <p><strong>Address Section :</strong></p><hr />
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                                <input type="text" value={view.city} className="form-control" disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">State</label>
                                <input type="text" value={view.state} className="form-control" disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Pin</label>
                                <input type="number" value={view.pin} className="form-control" disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                                <input type="text" value={view.address} className="form-control" disabled />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Job Role</label>
                                <input className="form-control" value={view.role} type="text" disabled />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*modal for view end */}

            {/*modal for Edit details */}
            <div className="modal fade" id="updatemodel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={updateUser}>
                            <div className="modal-body">
                                <input style={{ display: 'none' }} type="text" onChange={onchangeupdatehandler} value={update._id} name="_id" />
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                    <input type="text" value={update.fname} className="form-control" name='fname' onChange={onchangeupdatehandler} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                    <input type="email" value={update.email} className="form-control" name='email' onChange={onchangeupdatehandler} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                    <input type="text" value={update.phone} className="form-control" name='phone' onChange={onchangeupdatehandler} />
                                </div>
                                <p><strong>Address Section :</strong></p><hr />
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                                    <input type="text" value={update.city} className="form-control" name='city' onChange={onchangeupdatehandler} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">State</label>
                                    <input type="text" value={update.state} className="form-control" name='state' onChange={onchangeupdatehandler} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Pin</label>
                                    <input type="number" value={update.pin} className="form-control" name='pin' onChange={onchangeupdatehandler} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                                    <input type="text" value={update.address} className="form-control" name='address' onChange={onchangeupdatehandler} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Job Role</label>
                                    <input className="form-control" value={update.role} type="text" name='role' onChange={onchangeupdatehandler} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/*modal for Edit details */}

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='header mx-3 my-3'>
                            <h2 className='text-warning'><s>User Details</s></h2>
                        </div>
                        <table className="table table-striped shadow rounded">
                            <thead>
                                <tr>
                                    <th scope="col" className='text-danger'>#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Role</th>
                                    <th scope="col" className='text-center'>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map((e, count) => {
                                    return <tr>
                                        <th scope="row">{count + 1}</th>
                                        <td>{e.fname}</td>
                                        <td>{e.email}</td>
                                        <td>{e.phone}</td>
                                        <td>{e.city}</td>
                                        <td>{e.role}</td>
                                        <td>
                                            <div className='row'>
                                                <div className='col-md-6' style={{ marginLeft: "90px" }}>
                                                    <div className='row'>
                                                        <div className='col-md-3 m-1'>
                                                            <button className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#updatemodel" data-bs-placement="top" title="Edit" onClick={() => updateData(e)}><AiFillEyeInvisible className='text-warning' /></button>
                                                        </div>
                                                        <div className='col-md-3 m-1'>
                                                            <button className='btn btn-dark' data-bs-target="#exampleModal" data-bs-toggle="modal" data-bs-placement="top" title="View" onClick={() => clicked(e)}><AiFillEye className='text-success' /></button>
                                                        </div>
                                                        <div className='col-md-3 m-1'>
                                                            <button className='btn btn-dark' data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={() => deleteData(e)}><AiFillDelete className='text-danger' /></button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </td>
                                    </tr>

                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home