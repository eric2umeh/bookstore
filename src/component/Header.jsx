import React from 'react'
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container row">
        <Link to="/" className="logo">
          Bookstore CMS
        </Link>
        <Navigation />
        <span className="user">
          <BsFillPersonFill className="icon" />
        </span>
      </div>
    </header>
  )
}

export default Header