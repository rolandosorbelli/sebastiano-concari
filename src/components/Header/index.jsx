import React from "react"

const Header = ({ title }) => {
  console.log(title)

  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
    </div>
  )
}

export default Header
