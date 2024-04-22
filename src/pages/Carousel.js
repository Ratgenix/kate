import React from 'react'
import './pages.css'
import { Carousel } from 'react-responsive-carousel';
import logo from '../imgs/logo.png'
import logo2 from '../imgs/logo.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselP() {
  return (
    <Carousel className="Crsl" autoPlay infiniteLoop centerMode interval={2000}
    showThumbs={false} showArrows={false}>
    <div>
        <img src={logo} />
       
    </div>
    <div>
        <img src={logo2} />
       
    </div>
</Carousel>
  )
}

export default CarouselP