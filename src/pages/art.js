import React from "react"
import { graphql } from "gatsby"
import SimpleReactLightbox from "simple-react-lightbox"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const Art = ({ data }) => {
  const categories = data.allContentfulArtCategory.edges
  const grid = data.allContentfulArt.edges

  return (
    <Layout>
      <SEO title="Art" />
      <Navbar />
      <Header title="Art" />
      <SimpleReactLightbox>
        <Gallery content={grid} categories={categories} isShop={false} />
      </SimpleReactLightbox>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulArt(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          category {
            slug
            title
          }
          description
          image {
            description
            fluid(maxWidth: 1200, quality: 85) {
              src
              ...GatsbyContentfulFluid
            }
          }
          slug
          title
        }
      }
    }
    allContentfulArtCategory(sort: { fields: title, order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Art
