import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const Shop = ({ data }) => {
  const categories = data.allContentfulShopCategory.edges
  const grid = data.allContentfulShop.edges
  return (
    <Layout>
      <SEO title="Shop" />
      <Navbar />
      <Header title="Shop" />
      <Gallery content={grid} categories={categories} isShop={true} />
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
