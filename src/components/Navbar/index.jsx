import React from "react"

import logo from "../../images/logo.svg"
import skull from "../../images/skull.svg"
import { Menu } from "@material-ui/icons"

const Navbar = () => {
  return (
    <nav>
      <div className="content">
        <div className="logos">
          <img className="logo" src={logo} alt="logo" />
          <img className="skull" src={skull} alt="second logo" />
          <h1 className="nav-name">Sebastiano Concari</h1>
        </div>
        <div className="links">
          <a href="/">Tattoos</a>
          <a href="/">Art</a>
          <a href="/">Shop</a>
          <a href="mailto:rolando.sorbelli@gmail.com">Contact me</a>
        </div>
        <Menu className="menu" />
      </div>
      <div className="dropdown">
        <a href="/">Home</a>
        <a href="/">Tatoos</a>
        <a href="/">Art</a>
        <a href="/">Shop</a>
        <a href="mailto:rolando.sorbelli@gmail.com">Contact me</a>
        <a href="/">Instagram</a>
      </div>
    </nav>
  )
}

export default Navbar
