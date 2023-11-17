require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SK);

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello World! World Hello !');
});

app.post('/checkout', async (req, res) => {
  // console.log(req.body);

  const items = req.body;
  let lineItems = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    // success_url: 'http://localhost:5173/success',
    // cancel_url: 'http://localhost:5173/',
    success_url:
      'https://e-commerce-product-page-yvby-frontend.vercel.app/success',
    cancel_url: 'https://e-commerce-product-page-yvby-frontend.vercel.app/',
  });

  res.send(
    JSON.stringify({
      url: session.url,
      session: session,
    })
  );
});

app.post('/retrieve', async (req, res) => {
  // console.log(req.body.id);

  try {
    const session = await stripe.checkout.sessions.retrieve(req.body.id);

    res.send(
      JSON.stringify({
        customer: session.customer_details,
        status: session.status,
      })
    );
  } catch (error) {
    res.send(
      JSON.stringify({
        error: error,
      })
    );
  }
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT} `);
});
