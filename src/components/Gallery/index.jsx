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
}

const Gallery = content => {
  return (
    <div className="gallery">
      <div className="gallery__wrapper">
        <SRLWrapper options={options}>
          {content.content.map((item, i) => (
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
  )
}

export default Gallery
