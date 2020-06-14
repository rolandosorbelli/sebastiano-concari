import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

import tattoos from "../images/cta-tattoos.jpg"
import art from "../images/cta-art.jpg"

const Home = () => (
  <Layout>
    <Navbar />
    <Hero
      image={tattoos}
      heading="My tattoos"
      description="Click here to see my latest tattoos"
      url="/tattoos"
    />
    <Hero
      image={art}
      heading="My art"
      description="Not only interested in tattoos? Have a look at the art I make here!"
      url="/art"
    />
  </Layout>
)

export default Home
