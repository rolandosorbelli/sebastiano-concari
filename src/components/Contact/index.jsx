import React from "react"

import profile from "../../images/profile.jpg"

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact me</h1>
      <p className="contact__content">
        Contact me here if you want to book an appointment for a tattoo or just
        for a chat.
        <span className="arrow">⟶</span>
      </p>
      <div className="contact__bottom">
        <a
          href="mailto:concarisebastiano@gmail.com"
          className="contact__button"
        >
          <span className="contact__button-text">click here!</span>
        </a>
        <img src={profile} alt="" className="contact__image" />
      </div>
    </div>
  )
}

export default Contact
