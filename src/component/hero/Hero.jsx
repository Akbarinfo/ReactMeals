import React from "react";
//scss
import './Hero.scss'
//images
import hero_img from '../../assets/images/hero-img.jpg'

export default function Hero() {
  return(
    <div className="hero">
      <img className="hero__img" src={hero_img} alt="heroimg" />
    </div>
  )
}