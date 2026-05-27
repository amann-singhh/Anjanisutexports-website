import React, { useState } from 'react'
import Lightbox from '../components/Lightbox'
import { categories as categoryDefs } from '../data/categories'
import data from '../data/products.json'

function ProductCard({ product, onOpen }) {
  return (
    <article className="product-card">
      <button
        className="product-image-button"
        onClick={() => onOpen(product.image, product.name)}
      >
        <img src={product.image} alt={product.name} />
      </button>

      <div className="product-card-body">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-tags">
          {product.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <button
          className="enquire-btn"
          onClick={() =>
            window.location.assign(
              `/contact?product=${encodeURIComponent(product.name)}`
            )
          }
        >
          Enquire About This
        </button>
      </div>
    </article>
  )
}

export default function Products() {
  const [activeFilter, setActiveFilter] = useState(null)

  const [lightbox, setLightbox] = useState({
    open: false,
    src: '',
    alt: '',
  })

  const openLightbox = (src, alt) =>
    setLightbox({
      open: true,
      src,
      alt,
    })

  const closeLightbox = () =>
    setLightbox({
      open: false,
      src: '',
      alt: '',
    })

  const categories = categoryDefs.filter((category) =>
    data.categories.some(
      (apiCategory) => apiCategory.id === category.id
    )
  )

  const filteredProducts = activeFilter
    ? data.products.filter(
        (product) => product.category === activeFilter
      )
    : data.products

  const groupedByCategory = categories
    .map((category) => ({
      category,
      products: filteredProducts.filter(
        (product) => product.category === category.id
      ),
    }))
    .filter((group) => group.products.length > 0)

  return (
    <main className="page-shell">
      <section className="products-hero">
        <div className="container">
          <h1>Product Catalogue</h1>

          <p>
            Browse our export-ready spices, seeds,
            dry fruits and premium products with
            full category filtering.
          </p>
        </div>
      </section>

      <section className="product-filters">
        <div className="container filter-row">
          <button
            className={`filter-pill ${
              activeFilter === null ? 'active' : ''
            }`}
            onClick={() => setActiveFilter(null)}
          >
            All Products
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-pill ${
                activeFilter === category.id ? 'active' : ''
              }`}
              onClick={() =>
                setActiveFilter(category.id)
              }
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="container">
        {groupedByCategory.map(
          ({ category, products }) => (
            <div
              className="category-section"
              id={category.id}
              key={category.id}
            >
              <div className="category-heading">
                <h2>{category.label}</h2>

                <p>{category.icon}</p>
              </div>

              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpen={openLightbox}
                  />
                ))}
              </div>
            </div>
          )
        )}
      </section>

      <Lightbox
        open={lightbox.open}
        type="image"
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={closeLightbox}
      />
    </main>
  )
}