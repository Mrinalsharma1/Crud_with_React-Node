import React from 'react'
import Navbar from "./Navbar";
import { useState } from "react"
import axios from 'axios';

function AddProduct() {
    const [product, setproduct] = useState({
        pname: "",
        price: "",
        desc: "",
        pimage: ""
    })

    const handlerChange = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.value })
        console.log(product)
    }

    const cliclProduct = (e) => {
        e.preventDefault();
        const formdata = new FormData()
        // console.log(product.pimage + " " + product.pimage.name)
        formdata.append('pimage', product.pimage)
        formdata.append('pname', product.pname)
        formdata.append('price', product.price)
        formdata.append('desc', product.desc)

        axios({
            method: 'post',
            url: 'http://localhost:5000/product',
            data: formdata
        }).then(e => console.log("success", e.status === 200 ? alert("image Uploded successfully") : alert("not success")));
        setproduct({
            pname: "",
            price: "",
            desc: ""
        })
    }
    const uploadImage = (e) => {
        console.log(e.target.files[0])
        setproduct({ ...product, pimage: e.target.files[0] })
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 mx-auto mt-5'>
                        <h3 className='mb-4'>Add Product</h3>
                        <form onSubmit={cliclProduct}>
                            <div className="mb-3">
                                <label className="form-label">Product Name</label>
                                <input type="text" className="form-control" name="pname" onChange={handlerChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input type="number" name="price" className="form-control" onChange={handlerChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Descripction</label>
                                <input type="text" name="desc" className="form-control" onChange={handlerChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Product Image</label>
                                <input type="file" name="pimage" className="form-control" onChange={uploadImage} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct