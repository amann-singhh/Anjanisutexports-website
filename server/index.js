const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const productsPath = path.join(__dirname, '..', 'shared', 'products.json')
const enquiriesPath = path.join(__dirname, 'enquiries.json')

app.get('/api/products', (req, res) => {
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read products file', err)
      return res.status(500).json({ error: 'Could not read products file' })
    }

    try {
      const json = JSON.parse(data)
      res.json(json)
    } catch (error) {
      console.error('Invalid products file', error)
      res.status(500).json({ error: 'Invalid products file' })
    }
  })
})

const saveEnquiry = (entry, callback) => {
  fs.readFile(enquiriesPath, 'utf8', (readErr, rawData) => {
    let current = []
    if (!readErr) {
      try {
        current = JSON.parse(rawData)
      } catch (error) {
        current = []
      }
    }

    current.push(entry)
    fs.writeFile(enquiriesPath, JSON.stringify(current, null, 2), 'utf8', callback)
  })
}

app.post(['/api/contact', '/api/enquiries'], (req, res) => {
  const { name, email, company, country, products, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const enquiry = {
    timestamp: new Date().toISOString(),
    name,
    email,
    company: company || '',
    country: country || '',
    products: products || '',
    message,
  }

  saveEnquiry(enquiry, (err) => {
    if (err) {
      console.error('Could not save enquiry', err)
      return res.status(500).json({ error: 'Could not save enquiry' })
    }
    res.json({ ok: true })
  })
})

const clientDist = path.join(__dirname, '..', 'client', 'dist')
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist))
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
