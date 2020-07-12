import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import NotFound from "../components/NotFound"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found" />
    <Navbar />
    <NotFound />
    <Footer />
  </Layout>
)

export default NotFoundPage
