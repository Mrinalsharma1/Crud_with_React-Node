import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../slide.css'

class Slide extends Component {

    render() {
        const images = [
            "https://images.pexels.com/photos/4676396/pexels-photo-4676396.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/9992330/pexels-photo-9992330.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/9992330/pexels-photo-9992330.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
        return (
            <>
                <Carousel>
                    <div>
                        <img src={images[0]} alt="slide1" />
                        <p className="legend">Slide 1</p>
                    </div>
                    <div>
                        <img src={images[1]} alt="mobile" />
                        <p className="legend">Slide 2</p>
                    </div>
                    <div>
                        <img src={images[2]} alt="image3" />
                        <p className="legend">Slide 3</p>
                    </div>
                </Carousel>
            </>
        );
    }
}
export default Slide;
