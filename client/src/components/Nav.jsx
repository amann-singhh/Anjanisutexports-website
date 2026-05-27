import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { brand } from '../config/brand'
import { navLinks } from '../config/nav'

export default function Nav(){
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav className="nav">
      <div className="container nav-bar">
        <Link to="/" className="brand">
          {brand.logo && <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />}
          <span>{brand.name}</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-quote">
            Request a Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
