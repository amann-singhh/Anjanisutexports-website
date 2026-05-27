import React, { useState, useEffect } from 'react'
import { brand } from '../config/brand'

export default function Contact(){
  const API_BASE = import.meta.env.VITE_API_URL || '/api'
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', products: '', message: '' })
  const [status, setStatus] = useState(null)
  const [product, setProduct] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const prod = params.get('product')
    if (prod) setProduct(prod)
  }, [])

  const whatsappNumber = brand.contact.whatsapp.replace(/\D/g, '')
  const whatsappHref = `https://wa.me/${whatsappNumber}`

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(`${API_BASE}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, products: product || form.products }),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', country: '', products: '', message: '' })
        setTimeout(() => setStatus(null), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <main>
      <section className="contact-section">
        <div className="container contact-shell">
          <div className="contact-header">
            <h1>Looking to source premium Indian spices?</h1>
            <p>Let's talk. We're here to help with competitive pricing, custom MOQs, and reliable export logistics.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-form">
              <h3>Send us an enquiry</h3>
              <form onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input
                    id="company"
                    required
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <input
                    id="country"
                    required
                    type="text"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    placeholder="Country of import"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="products">Products Interested In</label>
                  <select
                    id="products"
                    value={product || form.products}
                    onChange={(e) => setForm({ ...form, products: e.target.value })}
                  >
                    <option value="">Select a category...</option>
                    <option value="whole_spices">Whole Spices</option>
                    <option value="seeds">Seeds</option>
                    <option value="dry_fruits">Dry Fruits</option>
                    <option value="premium">Premium Products</option>
                    <option value="custom">Custom Mix</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements, volumes, and timeline..."
                    rows={6}
                  />
                </div>

                <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                </button>

                {status === 'sent' && (
                  <div className="form-status success">✓ Thank you! We've received your enquiry and will respond within 24 hours.</div>
                )}

                {status === 'error' && (
                  <div className="form-status error">✕ Error sending message. Please try again or contact us directly.</div>
                )}
              </form>
            </div>

            <aside className="contact-info">
              <h3>Connect With Us</h3>

              <div className="contact-info-item">
                <div className="contact-info-icon">📞</div>
                <div>
                  <h4>WhatsApp / Phone</h4>
                  <p><a href={whatsappHref}>{brand.contact.phone}</a></p>
                  <p>Quick responses on WhatsApp</p>
                </div>
              </div>

              <a href={whatsappHref} className="whatsapp-btn mobile-sticky">
                💬 Chat on WhatsApp
              </a>

              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p><a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a></p>
                  <p>Detailed enquiry support</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>{brand.contact.address}</p>
                </div>
              </div>

              <div className="contact-note">
                <h4>Why Contact Us?</h4>
                <ul>
                  <li>Direct from source — no middlemen</li>
                  <li>Competitive MOQs for new partners</li>
                  <li>Custom packaging available</li>
                  <li>Fast shipping & logistics support</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
