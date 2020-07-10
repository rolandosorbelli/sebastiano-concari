import React from "react"
import { graphql } from "gatsby"
import SimpleReactLightbox from "simple-react-lightbox"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

const Tattoos = ({ data }) => {
  const categories = data.allContentfulTattooCategory.edges
  const grid = data.allContentfulTattoo.edges
  return (
    <Layout>
      {console.log(data, "DATA")}
      <Navbar />
      <Header title="Tattoos" />
      <SimpleReactLightbox>
        <Gallery content={grid} categories={categories} isShop={false} />
      </SimpleReactLightbox>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulTattoo(sort: { fields: createdAt, order: DESC }) {
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
    allContentfulTattooCategory(sort: { fields: title, order: ASC }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Tattoos
