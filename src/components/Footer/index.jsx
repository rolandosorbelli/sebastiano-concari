import React from "react"

import logo from "../../images/footer-logo.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer__section footer__logo">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <p className="footer__logo-details">Based in London</p>
          <p className="footer__logo-details">
            Ascendence Tattoo - 141 N Hyde Rd, Hayes, UB3 4NS
          </p>
        </div>
        <div className="footer__section footer__about">
          <h2>About me</h2>
          <ul>
            <li>
              <a href="/tattoos">Tattoos</a>
            </li>
            <li>
              <a href="/art">Art</a>
            </li>
            <li>
              <a href="/makeup">Makeup</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
          </ul>
        </div>
        <div className="footer__section footer__contact">
          <h2>Social & Contact</h2>
          <ul>
            <li>
              <a href="mailto:concarisebastiano@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://www.instagram.com/essetattoo/">Instagram</a>
            </li>
            <li>
              <a href="https://www.redbubble.com/people/EsseTattoo/shop">
                Redbubble
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer__copyright">
          &copy; Copyright {new Date().getFullYear()}, Sebastiano Concari.
        </span>
      </div>
    </footer>
  )
}

export default Footer
