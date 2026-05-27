import React from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { certifications } from '../data/certifications'
import { team } from '../data/team'

export default function About(){
  return (
    <main>
      <section className="about-section">
        <div className="container">
          <h2>Our Roots</h2>
          <p>{brand.name} began over 12 years ago in the heart of India's spice trade. We started with a simple promise: pure products, honest pricing, and care in every shipment. Our focus on authenticity and partnerships with trusted growers helped us grow into a respected supplier.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>Our Journey</h2>
          <p>We built long-term relationships with farmers, quality inspectors and logistics partners across India's spice regions. Every product is sampled, inspected and packaged to export-grade standards, so buyers can trust the quality from the first shipment.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>Going Global</h2>
          <p>Today we serve international importers, distributors and wholesalers who want premium Indian spices and agro products with transparent sourcing, compliant packaging, and dependable logistics.</p>
        </div>
      </section>

      <section className="about-section certifications-shell">
        <div className="container">
          <div className="section-heading">
            <h2>Quality You Can Verify</h2>
            <p>Your trust is our most valuable asset. We maintain internationally trusted certifications and export-ready checks.</p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div className="cert-badge" key={cert.name}>
                <div className="cert-badge-icon">✓</div>
                <div>
                  <div className="cert-badge-name">{cert.name}</div>
                  <div className="cert-badge-body">{cert.issuingBody}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-heading">
            <h2>Meet the Team</h2>
            <p>Our team brings sourcing, quality and export expertise together to make every order smooth and reliable.</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-avatar">{member.name.split(' ').map((word) => word[0]).join('')}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Partner With Us?</h2>
          <p>We welcome new enquiries for export supplies, custom packaging and ongoing sourcing partnerships.</p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </main>
  )
}
