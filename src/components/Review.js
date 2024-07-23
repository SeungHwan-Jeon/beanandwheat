import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/styles/Review.css";

function Review() {
    const images = [
        "/images/reviews/1.png",
        "/images/reviews/2.png",
        "/images/reviews/7.png",
        "/images/reviews/3.png",
        "/images/reviews/8.png",
        "/images/reviews/4.png",
        "/images/reviews/9.png",
        "/images/reviews/5.png",
        "/images/reviews/6.png",
    ];

    const firstCarouselImages = images.slice(0, 3);
    const secondCarouselImages = images.slice(3, 6);
    const thirdCarouselImages = images.slice(6, 9);

    const renderCarouselItems = (images) => {
        return images.map((src, idx) => (
            <Carousel.Item key={idx} className="carousel-item">
                <img src={src} alt={`Slide ${idx + 1}`} />
            </Carousel.Item>
        ));
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <Carousel
                    fade
                    interval={2000}
                    controls={false}
                    indicators={false}
                >
                    {renderCarouselItems(firstCarouselImages)}
                </Carousel>
            </div>
            <div className="carousel-wrapper">
                <Carousel
                    fade
                    interval={4000}
                    controls={false}
                    indicators={false}
                >
                    {renderCarouselItems(secondCarouselImages)}
                </Carousel>
            </div>
            <div className="carousel-wrapper">
                <Carousel
                    fade
                    interval={6000}
                    controls={false}
                    indicators={false}
                >
                    {renderCarouselItems(thirdCarouselImages)}
                </Carousel>
            </div>
        </div>
    );
}

export default Review;
