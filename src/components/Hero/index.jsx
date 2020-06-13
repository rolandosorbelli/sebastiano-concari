import React from "react"

const Hero = ({ image, heading, description, url }) => {
  console.log(image)

  return (
    <div className="hero">
      <div className="hero__image" style={{ backgroundImage: `url(${image})` }}>
        <span className="hero__image-overlay"></span>
      </div>
      <div className="hero__content">
        <h1 className="hero__heading">{heading}</h1>
        <p className="hero__description">
          {description} <span>⟶</span>
        </p>
      </div>
      <a href={url} className="hero__button">
        <span className="hero__button-text">view</span>
      </a>
    </div>
  )
}

export default Hero
