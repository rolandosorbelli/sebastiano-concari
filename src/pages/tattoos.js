import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Categories from "../components/Categories"

const Tattoos = ({ data }) => {
  const categories = data.allContentfulCategory.edges
  return (
    <Layout>
      {console.log(data, "DATA")}
      <Navbar />
      <Header title="Tattoos" />
      <Categories content={categories} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulTattoo(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          alt
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
    allContentfulCategory(sort: { fields: createdAt, order: DESC }) {
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
