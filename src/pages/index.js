import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

import tattoos from "../images/cta-tattoos.jpg"

const Home = () => (
  <Layout>
    <Navbar />
    <Hero
      image={tattoos}
      heading="My tattoos"
      description="Click here to see my latest tattoos"
      url="/tattoos"
    />
  </Layout>
)

export default Home
