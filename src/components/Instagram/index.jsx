import React, { useState, useEffect } from "react"

const Instagram = () => {
  const [instadata, setInstadata] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = `https://www.instagram.com/graphql/query/?query_hash=eddbde960fed6bde675388aac39a3657&variables={%22id%22:%2214930556527%22,%22first%22:4}`
    const data = await fetch(url).then(res => res.json())
    console.log(data, "DATA")

    if (Object.keys(data).length > 0) {
      data.data.user.edge_owner_to_timeline_media.edges.forEach(item => {
        if (!item.node.is_video) {
          setInstadata(data.data.user.edge_owner_to_timeline_media.edges)
        }
      })
      setLoading(false)
    }
  }

  return (
    <div className="instagram">
      <div className="instagram__header">
        <h1 className="instagram__title">Instagram</h1>
        <a href="https://www.instagram.com/essetattoo/">
          <span className="instagram__more">
            See more on my profile
            <span>⟶</span>
          </span>
        </a>
      </div>
      <div className="instagram__content">
        {!loading &&
          instadata.map((item, index) => (
            <div className="overlay" key={index}>
              <img
                src={item.node.thumbnail_src}
                alt=""
                className="instagram__image"
              />
              <div className="background"></div>
              <span className="instagram__caption">
                {item.node.edge_media_to_caption.edges[0].node.text}
              </span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Instagram
