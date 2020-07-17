import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Instagram from "../components/Instagram"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SEO from "../components/seo"

import tattoos from "../images/cta-tattoos.jpg"
import art from "../images/cta-art.jpg"
import shop from "../images/cta-shop.jpg"
import makeup from "../images/cta-makeup.jpg"

const Home = () => (
  <Layout>
    <SEO title="Home" />
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
    <Hero
      image={makeup}
      heading="My makeup"
      description="Because there is no better canvas than a face"
      url="/makeup"
    />
    <Hero
      image={shop}
      heading="My shop"
      description="Browse my shop on Redbubble"
      url="/shop"
    />
    <div className="grid">
      <Instagram />
      <Contact />
    </div>
    <Footer />
  </Layout>
)

export default Home
