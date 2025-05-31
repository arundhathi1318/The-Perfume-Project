const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/', async (req, res) => {
    try {
        const products = await Product.find().select('name shortDescription price images category _id'); // Example selection
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product); 
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Product not found (invalid ID format)' });
        }
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;