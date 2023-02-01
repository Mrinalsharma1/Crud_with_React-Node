import React from 'react'
import Navbar from './Navbar'

function Viewproduct() {
    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 mt-4'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="./Image/1675271933891-696889377-Mrinal_sing.png" className="card-img-top" alt="product" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewproduct