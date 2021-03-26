const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

const cors = require('cors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// Load env vars
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = express()

// JSON body parser middleware
app.use(express.json())

// Enable CORS
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  })
})

const PORT = process.env.PORT || 3004
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
  )
)
