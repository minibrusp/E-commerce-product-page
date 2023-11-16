import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SK);

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
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/',
    // success_url: 'https://react-ecommerce-stripe-traversy.vercel.app/success',
    // cancel_url: 'https://react-ecommerce-stripe-traversy.vercel.app/cancel',
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT} `);
});

export default app;
