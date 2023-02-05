import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Slide from './Slide';
import axios from 'axios'
function Viewproduct() {

    const [product, setproduct] = useState()

    useEffect(() => {
        axios.post(`http://localhost:5000/fetchproduct`)
            .then(res => {
                const result = res.data;
                setproduct(result);
                console.log(product)
            }).catch(e => console.error(e))
    }, [])




    return (
        <>
            <Navbar />
            <Slide />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 mt-4'>
                        <div className="card" style={{ width: "18rem" }}>

                            <img src={require(`../Image/${product[5].pimage}`)} className="card-img-top" alt="product" />
                            <div className="card-body">
                                {/* <h5 className="card-title">{product[5].pname}</h5>
                                // <p className="card-text">{product[5].desc}</p>
    */}
                                {/*<a href='' className="btn btn-primary">Go somewhere</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewproduct

