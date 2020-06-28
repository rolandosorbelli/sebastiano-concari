import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Categories from "../components/Categories"

const Art = () => (
  <Layout>
    <Navbar />
    <Header title="Art" />
    <Categories />
  </Layout>
)

export default Art
