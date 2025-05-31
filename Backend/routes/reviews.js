// backend/routes/reviews.js
const express = require('express');
const router = express.Router();
const Review = require('../models/Review.js');
const Product = require('../models/Product'); // To check if product exists

// GET reviews for a specific product
router.get('/product/:productId', async (req, res) => {
    try {
        const reviews = await Review.find({ productId: req.params.productId }).sort({ createdAt: -1 });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new review for a product
router.post('/product/:productId', async (req, res) => {
    const { author, rating, comment } = req.body;
    const { productId } = req.params;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const review = new Review({
            productId,
            author,
            rating,
            comment
        });

        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;