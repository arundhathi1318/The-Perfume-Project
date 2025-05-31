// backend/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
    try {
        // For product cards on homepage, you might not need the full 'description' or all 'sizes'.
        // Consider selecting only necessary fields to reduce payload size.
        const products = await Product.find().select('name shortDescription price images category _id'); // Example selection
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product); // For the product page, sending all details is fine
    } catch (err) {
        // Handle cases where the ID format is invalid (Mongoose CastError)
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Product not found (invalid ID format)' });
        }
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;