import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Categories from "../components/Categories"

const Tattoos = () => (
  <Layout>
    <Navbar />
    <Header title="Tattoos" />
    <Categories />
  </Layout>
)

export default Tattoos
