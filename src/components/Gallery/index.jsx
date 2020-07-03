import React from "react"

const Gallery = content => {
  return (
    <div className="gallery">
      <div className="gallery__wrapper">
        {content.content.map((item, i) => (
          <a key={i} href={item.node.image.fluid.src}>
            <img src={item.node.image.fluid.src} alt={item.node.alt} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Gallery
