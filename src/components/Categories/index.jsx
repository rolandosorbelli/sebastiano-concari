import React from "react"

const Categories = categories => {
  return (
    <div className="categories">
      <div className="categories__wrapper">
        <div className="categories__gradient left"></div>
        {categories.content.length > 0 && (
          <div className="categories__items">
            <a href="/">All</a>
            {categories.content.map((item, i) => (
              <a href="/" key={i}>
                {item.node.title}
              </a>
            ))}
          </div>
        )}

        <div className="categories__gradient right"></div>
      </div>
    </div>
  )
}

export default Categories
