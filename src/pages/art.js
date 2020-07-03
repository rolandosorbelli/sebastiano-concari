import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Categories from "../components/Categories"

const Art = ({ data }) => {
  const categories = data.allContentfulTattooCategory.edges
  return (
    <Layout>
      <Navbar />
      <Header title="Art" />
      <Categories content={categories} />
    </Layout>
  )
}

export default Art
