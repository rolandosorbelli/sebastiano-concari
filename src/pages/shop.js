import React from "react"
import { graphql } from "gatsby"
import SimpleReactLightbox from "simple-react-lightbox"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

const Shop = ({ data }) => {
  const categories = data.allContentfulShopCategory.edges
  const grid = data.allContentfulShop.edges
  return (
    <Layout>
      {console.log(data, "DATA")}
      <Navbar />
      <Header title="Shop" />
      <SimpleReactLightbox>
        <Gallery content={grid} categories={categories} isShop={true} />
      </SimpleReactLightbox>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulShop(sort: { fields: createdAt, order: DESC }) {
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
          url
        }
      }
    }
    allContentfulShopCategory(sort: { fields: title, order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Shop
