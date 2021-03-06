import React, { useState } from 'react'
import { Link } from 'gatsby'
import linkedin from '../img/social/linkedin.svg'
import logo from '../img/logo.svg'

const Navbar = () =>
{
  const [active, setActive] = useState(false)
  const toggleHamburger = () =>
  {
    setActive(!active)
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img style={{ maxWidth: '80vw' }} src={logo} alt="Karen Worrall" />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${active && 'is-active'}`}
            data-target="navMenu"
            role="button"
            tabIndex={0}
            onKeyDown={toggleHamburger}
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${active && 'is-active'}`}
        >
          <div className="navbar-start has-text-centered is-family-secondary is-uppercase">
            <Link className="navbar-item" to="/about">
              About
              </Link>
            {/* <Link className="navbar-item" to="/products">
              Products
              </Link>
            <Link className="navbar-item" to="/blog">
              Blog
              </Link> */}
            <Link className="navbar-item" to="/services">
              Services
              </Link>
            <Link className="navbar-item" to="/portfolio">
              Portfolio
              </Link>
            <Link className="navbar-item" to="/testimonials">
              Testimonials
              </Link>
            <Link className="navbar-item" to="/contact">
              Contact
              </Link>
            {/* <Link className="navbar-item" to="/contact/examples">
              Form Examples
              </Link> */}
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={linkedin} alt="Linkedin" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Navbar
