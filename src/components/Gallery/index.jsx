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

const Gallery = ({ categories, content, isShop }) => {
  const [inputQuery, setInputQuery] = React.useState("")
  const [urlQuery, setUrlQuery] = React.useState("")
  const [contentState, setContentState] = React.useState([])

  React.useEffect(() => {
    const query = {}
    const parts = window.location.href.replace(
      /[?]+([^=]+)=([^]*)/gi,
      (m, key, value) => {
        query[key] = value
      }
    )
    if (Object.keys(query).length > 0) setUrlQuery(query.category)
  }, [])

  const handleQueries = e => {
    e.preventDefault()
    const query = e.target.text
    if (query.length > 0) setInputQuery(query)
  }

  const resetQueries = e => {
    e.preventDefault()
    if (window.history.pushState) {
      const { protocol, host, pathname } = window.location
      console.log(protocol, host, pathname, "URL")
      const newurl = `${protocol}//${host}${pathname}`
      window.history.pushState({ path: newurl }, "", newurl)
    }
    setContentState(content)
  }

  React.useEffect(() => {
    if (Object.keys(inputQuery).length > 0) handleNewUrl()
  }, [inputQuery])

  const handleNewUrl = () => {
    const formattedQuery = inputQuery.replace(/\s+/g, "-").toLowerCase()
    const newQuery = `category=${formattedQuery}`

    if (window.history.pushState) {
      const { protocol, host, pathname } = window.location
      const newurl = `${protocol}//${host}${pathname}?${newQuery}`
      window.history.pushState({ path: newurl }, "", newurl)
    }
    setUrlQuery(formattedQuery)
  }

  React.useEffect(() => {
    if (content.length > 0) setContentState(content)
  }, [content])

  const filterPictures = () => {
    const filterArray = []
    content.forEach(item => {
      const match = item.node.category.filter(item => item.slug === urlQuery)
      if (match.length) filterArray.push(item)
      if (Object.keys(urlQuery).length > 0) setContentState(filterArray)
    })
  }

  React.useEffect(() => {
    if (Object.keys(urlQuery).length > 0) filterPictures()
  }, [urlQuery])

  return (
    <>
      <div className="categories">
        <div className="categories__wrapper">
          <div className="categories__gradient left"></div>
          {categories.length > 0 && (
            <div className="categories__items">
              <a href="/" onClick={e => resetQueries(e)}>
                All
              </a>
              {categories.map((item, i) => (
                <a href="/" key={i} onClick={e => handleQueries(e)}>
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
          {isShop === false ? (
            <SRLWrapper options={options}>
              {contentState.map((item, i) => {
                const withDescription = item.node.description
                  ? `${item.node.title} - ${item.node.description}`
                  : item.node.title
                return (
                  <a
                    key={i}
                    href={item.node.image.fluid.src}
                    data-attribute="SRL"
                  >
                    <img
                      src={item.node.image.fluid.src}
                      alt={withDescription}
                    />
                  </a>
                )
              })}
            </SRLWrapper>
          ) : (
            <div>
              {contentState.map((item, i) => {
                const withDescription = item.node.description
                  ? `${item.node.title} - ${item.node.description}`
                  : item.node.title
                return (
                  <a key={i} href={item.node.url}>
                    <img
                      src={item.node.image.fluid.src}
                      alt={withDescription}
                    />
                    {isShop && (
                      <div className="gallery__info">
                        <p className="gallery__info--header">
                          {item.node.title}
                        </p>
                        <p className="gallery__info--body">
                          {item.node.description}
                        </p>
                      </div>
                    )}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Gallery
