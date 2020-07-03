import React from "react"

const Gallery = content => {
  return (
    <div className="gallery">
      <div className="gallery__wrapper">
        {content.content.map((item, i) => (
          <img key={i} src={item.node.image.fluid.src} alt={item.node.alt} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
