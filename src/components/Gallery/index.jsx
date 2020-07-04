import React from "react"
import { SRLWrapper } from "simple-react-lightbox"

const options = {
  buttons: {
    backgroundColor: "rgba(30,30,36,0.8)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "5px",
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
  },
  caption: {
    captionAlignment: "end",
    captionFontSize: "1.2rem",
    captionFontWeight: "300",
  },
}

const Gallery = ({ categories, content }) => {
  console.log(content, "CONTENT")
  console.log(categories, "CATEGORIES")

  return (
    <>
      <div className="categories">
        <div className="categories__wrapper">
          <div className="categories__gradient left"></div>
          {categories.length > 0 && (
            <div className="categories__items">
              <a href="/">All</a>
              {categories.map((item, i) => (
                <a href="/" key={i}>
                  {item.node.title}
                </a>
              ))}
            </div>
          )}

          <div className="categories__gradient right"></div>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery__wrapper">
          <SRLWrapper options={options}>
            {content.map((item, i) => (
              <a key={i} href={item.node.image.fluid.src} data-attribute="SRL">
                <img
                  src={item.node.image.fluid.src}
                  alt={item.node.description}
                />
              </a>
            ))}
          </SRLWrapper>
        </div>
      </div>
    </>
  )
}

export default Gallery
