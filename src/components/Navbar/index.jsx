import React, { useState } from "react"
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

  return (
    <nav>
      <div className="content">
        <div className="logos">
          <img className="logo" src={logo} alt="logo" />
          <img className="skull" src={skull} alt="second logo" />
          <h1 className="nav-name">Sebastiano Concari</h1>
        </div>
        <div className="links">
          {console.log(window.location.pathname.includes("tattoos"), window)}
          <a
            href="/tattoos"
            className={
              window.location.pathname.includes("tattoos")
                ? "links-active"
                : "links-inactive"
            }
          >
            Tattoos
          </a>
          <a
            href="/art"
            className={
              window.location.pathname.includes("/art")
                ? "links-active"
                : "links-inactive"
            }
          >
            Art
          </a>
          <a
            href="/shop/"
            className={
              window.location.pathname.includes("/shop")
                ? "links-active"
                : "links-inactive"
            }
          >
            Shop
          </a>
          <a href="mailto:rolando.sorbelli@gmail.com">Contact me</a>
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
          <a
            href="/"
            className={
              window.location.pathname === "/"
                ? "links-active"
                : "links-inactive"
            }
          >
            <span className="circle">
              <img src={home} alt="" />
            </span>
            <span>Home</span>
          </a>
          <a
            href="/tattoos"
            className={
              window.location.pathname.includes("tattoos")
                ? "links-active"
                : "links-inactive"
            }
          >
            <span className="circle">
              <img src={tattoos} alt="" />
            </span>
            <span>Tattoos</span>
          </a>
          <a
            href="/art/"
            className={
              window.location.pathname.includes("/art")
                ? "links-active"
                : "links-inactive"
            }
          >
            <span className="circle">
              <img src={art} alt="" />
            </span>
            <span>Art</span>
          </a>
          <a
            href="/shop/"
            className={
              window.location.pathname.includes("/shop")
                ? "links-active"
                : "links-inactive"
            }
          >
            <span className="circle">
              <img src={shop} alt="" />
            </span>
            <span>Shop</span>
          </a>
          <a href="/mailto:rolando.sorbelli@gmail.com">
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
