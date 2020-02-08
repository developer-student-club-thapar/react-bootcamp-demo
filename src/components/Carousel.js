/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

class CarouselComponent extends React.Component {
    render() {
        return (
            <Carousel width="80%" showThumbs={false} infiniteLoop={true}>
                <div>
                    <img
                        alt="Carousel Image 1"
                        className="carousel-img"
                        height="460px"
                        src="https://source.unsplash.com/random"
                    />
                </div>
                <div>
                    <img
                        alt="Carousel Image 2"
                        height="460px"
                        className="carousel-img"
                        src="https://source.unsplash.com/random"
                    />
                </div>
                <div>
                    <img
                        alt="Carousel Image 3"
                        height="460px"
                        className="carousel-img"
                        src="https://source.unsplash.com/random"
                    />
                </div>
            </Carousel>
        );
    }
}

export default CarouselComponent;
