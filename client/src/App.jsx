import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import { brand } from './config/brand'

export default function App(){
  useEffect(() => {
    document.title = brand.meta.title

    const updateMeta = (selector, content) => {
      const element = document.querySelector(selector)
      if (element) element.content = content
    }

    updateMeta('meta[name="description"]', brand.meta.description)
    updateMeta('meta[name="keywords"]', brand.meta.keywords)
    updateMeta('meta[property="og:title"]', brand.meta.title)
    updateMeta('meta[property="og:description"]', brand.meta.description)
    updateMeta('meta[property="og:image"]', brand.meta.ogImage)

    const iconLink = document.querySelector("link[rel~='icon']")
    if (iconLink) iconLink.href = brand.favicon
  }, [])

  return (
    <div className="app-shell">
      <Nav />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
