const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;


let cart = [];

app.use(cors());
app.use(bodyParser.json());

// Add product to cart
app.post('/api/cart', (req, res) => {
    const product = req.body;
    cart.push(product);
    res.status(201).json({ message: 'Product added to cart', cart });
});

// Get all products in cart
app.get('/api/cart', (req, res) => {
    res.json(cart);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
