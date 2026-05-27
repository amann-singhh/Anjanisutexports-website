import React from 'react'
import { navLinks } from '../config/nav'
import { brand } from '../config/brand'
import { certifications } from '../data/certifications'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <h4>About</h4>
          <p>{brand.tagline}</p>
        </div>

        <div className="footer-section">
          <h4>Pages</h4>
          {navLinks.map((item) => (
            <a key={item.path} href={item.path}>{item.label}</a>
          ))}
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a></p>
          <p>📞 <a href={`https://wa.me/${brand.contact.whatsapp.replace(/\D/g, '')}`}>{brand.contact.phone}</a></p>
          <p>🏢 {brand.name}<br />{brand.contact.address}</p>
        </div>

        <div className="footer-section">
          <h4>Certifications</h4>
          {certifications.map((cert) => (
            <p key={cert.name}>✓ {cert.name}</p>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
