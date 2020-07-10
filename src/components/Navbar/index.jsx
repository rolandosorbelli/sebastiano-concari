import React, { useState, useEffect } from "react"
import classnames from "classnames"
import { window } from "browser-monads"

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
  const [open, setOpen] = useState(false)
  const openMenu = () => setOpen(true)
  const closeMenu = () => setOpen(false)
  const [tattoosIndex, setTattooIndex] = useState(false)
  const [artIndex, setArtIndex] = useState(false)
  const [shopIndex, setShopIndex] = useState(false)
  const [homeIndex, setHomeIndex] = useState(false)

  useEffect(() => {
    const pageUrl = window.location.href
    pageUrl.indexOf("tattoos") > 0
      ? setTattooIndex(true)
      : pageUrl.indexOf("art") > 0
      ? setArtIndex(true)
      : pageUrl.indexOf("shop") > 0
      ? setShopIndex(true)
      : setHomeIndex(true)
  }, [])

  return (
    <nav>
      <div className="content">
        <div className="logos">
          <img className="logo" src={logo} alt="logo" />
          <img className="skull" src={skull} alt="second logo" />
          <a href="/">
            <h1 className="nav-name">Sebastiano Concari</h1>
          </a>
          <a href="/" aria-label="Home" className="logos--link">
            Home
          </a>
        </div>
        <div className="links">
          <a
            href="/tattoos"
            className={tattoosIndex ? "link-active" : undefined}
          >
            Tattoos
          </a>
          <a href="/art" className={artIndex ? "link-active" : undefined}>
            Art
          </a>
          <a href="/shop" className={shopIndex ? "link-active" : undefined}>
            Shop
          </a>
          <a
            href="mailto:concarisebastiano@gmail.com"
            className="contact-button"
          >
            Contact me
          </a>
        </div>
        <Menu className="menu" onClick={openMenu} />
      </div>
      <div
        className={classnames("dropdown", {
          "dropdown-open": open,
        })}
      >
        <div className="content">
          <div className="close">
            <Close onClick={closeMenu} />
          </div>
          <a href="/" className={homeIndex ? "link-active" : undefined}>
            <span className="circle">
              <img src={home} alt="" />
            </span>
            <span>Home</span>
          </a>
          <a
            href="/tattoos"
            className={tattoosIndex ? "link-active" : undefined}
          >
            <span className="circle">
              <img src={tattoos} alt="" />
            </span>
            <span>Tattoos</span>
          </a>
          <a href="/art" className={artIndex ? "link-active" : undefined}>
            <span className="circle">
              <img src={art} alt="" />
            </span>
            <span>Art</span>
          </a>
          <a href="/shop" className={shopIndex ? "link-active" : undefined}>
            <span className="circle">
              <img src={shop} alt="" />
            </span>
            <span>Shop</span>
          </a>
          <a href="mailto:concarisebastiano@gmail.com">
            <span className="circle">
              <img src={contact} alt="" />
            </span>
            <span>Contact me</span>
          </a>
          <a href="/">
            <span className="circle">
              <img src={instagram} alt="" />
            </span>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
