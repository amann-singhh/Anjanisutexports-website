import React from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { categories } from '../data/categories'
import { whyChooseUs } from '../data/whyChooseUs'

export default function Home(){
  return (
    <main>
      <section className="hero-media" style={{ backgroundImage: "url('/assets/images/web/thumbs/hero_thumb.jpg')" }}>
        <div className="hero-overlay">
          <div className="hero-copy">
            <p className="eyebrow">{brand.tagline}</p>
            <h1>{brand.name} — Premium Indian spices, seeds & agro products</h1>
            <p>12+ years built on trust, quality and export-ready compliance for buyers around the world.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn-primary">Request a Quote</Link>
              <Link to="/products" className="btn-secondary">Explore Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="trust-items container">
          {whyChooseUs.slice(0, 4).map((item) => (
            <div key={item.title} className="trust-item">
              <div className="trust-item-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <div className="section-heading">
            <h2>Featured Categories</h2>
          </div>
          <div className="featured-grid">
            {categories.map((category) => (
              <Link key={category.id} to={`/products#${category.id}`} className="card">
                <img src={category.image} alt={category.label} />
                <div className="card-body">
                  <h3>{category.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <div className="section-heading">
            <h2>Why Choose {brand.name}</h2>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="why-item">
                <div className="why-item-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-teaser">
        <div className="container teaser-shell">
          <div>
            <h2>Our Story</h2>
            <p>{brand.name} was born over 12 years ago in the heart of India's spice trade. We started small with one promise: pure products, honest pricing, and care in every shipment.</p>
            <Link to="/about" className="btn-secondary">Learn More About Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

