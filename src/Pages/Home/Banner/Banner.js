import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/19/40/f9/1940f9a108a9bae592d5abbb257dfd89.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Welcom To Venisa Resort</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/902481.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Get your most wanted adventure</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/201898141.jpg?k=97020c5f111ee97054aee603be0fcf3a166bb41b6667a7d6cf6dbb57d474d99a&o="
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Summer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;