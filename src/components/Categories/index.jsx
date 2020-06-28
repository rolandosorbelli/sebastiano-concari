import React from "react"

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__wrapper">
        <div className="categories__gradient left"></div>

        <div className="categories__items">
          <a href="/">All</a>
          <a href="/">Traditional</a>
          <a href="/">Realistic</a>
          <a href="/">Black & White</a>
          <a href="/">Colour</a>
        </div>
        <div className="categories__gradient right"></div>
      </div>
    </div>
  )
}

export default Categories
