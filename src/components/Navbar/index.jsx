import React from "react"

import logo from "../../images/logo.svg"
import skull from "../../images/skull.svg"
import home from "../../images/home.svg"
import art from "../../images/art.svg"
import contact from "../../images/contact.svg"
import instagram from "../../images/instagram.svg"
import shop from "../../images/shop.svg"
import tattoos from "../../images/tattoos.svg"

import { Menu, Close } from "@material-ui/icons"

const Navbar = () => {
  const navArray = {
    Home: home,
    Tattoos: tattoos,
    Art: art,
    Shop: shop,
    "Contact me": contact,
    Instagram: instagram,
  }
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
        <div className="content">
          <div className="close">
            <Close />
          </div>
          {Object.entries(navArray).map(([key, value], i) => (
            <a href="/" key={i}>
              <span className="circle">
                <img src={value} alt="" />
              </span>
              <span>{key}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
