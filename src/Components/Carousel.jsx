import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import CarouselImg from "../Assets/carusel-img.png"

const Slider = () => {
  return (
    <Wrapper>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            emulateTouch={true}
            showArrows={false}
            interval={2000}
        >
            <div>
                <img src={CarouselImg} alt="" />
            </div>
            <div>
                <img src={CarouselImg} alt="" />
            </div>
            <div>
                <img src={CarouselImg} alt="" />
            </div>
        </Carousel>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.div`
    z-index: -1;

    
    .carousel-status{
        display: none;
    }
    .control-arrow{
        display: none;
    }
    .control-dots{
        display: none;
    }
    .thumb{
        border: none; 
    }
    .thumbs{
        display: flex;
        align-items: center;
        background-color: #faf8ee;
    }
    .slide{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel .thumb.selected, .carousel .thumb:hover {
        border: 0px solid transparent;
    }
    .carousel-slider{
        max-width: 600px;
        height: 600px;
        padding: 40px 0px;
        background-color: #faf8ee;
    }
    .carousel .slider-wrapper{
        height: 500px;
        background-color: #faf8ee;
    }
    .thumbs-wrapper{
        margin-left: -0px;
        max-width: 250px;
        
    }
    .pip{
        object-fit: contain;
    }
    @media (max-width: 885px) {
        .carousel-slider {
            max-width: 100%;
            background-color: #faf8ee;
        } 
    }
`