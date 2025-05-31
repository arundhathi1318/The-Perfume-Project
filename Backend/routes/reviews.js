// backend/routes/reviews.js
const express = require('express');
const router = express.Router();
const Review = require('../models/Review.js');
const Product = require('../models/Product'); // To check if product exists before adding review

// GET reviews for a specific product
router.get('/product/:productId', async (req, res) => {
    try {
        const reviews = await Review.find({ productId: req.params.productId }).sort({ createdAt: -1 });
        res.json(reviews);
    } catch (err) {
         // Handle cases where the productId format is invalid
        if (err.kind === 'ObjectId' && err.path === 'productId') { // More specific check
            return res.status(400).json({ message: 'Invalid Product ID format for fetching reviews' });
        }
        res.status(500).json({ message: err.message });
    }
});

// POST a new review for a product
router.post('/product/:productId', async (req, res) => {
    const { author, rating, comment } = req.body;
    const { productId } = req.params;

    // Basic validation for required fields (Mongoose also validates)
    if (!rating || !comment) {
        return res.status(400).json({ message: "Rating and comment are required." });
    }
    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5." });
    }


    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found, cannot add review." });
        }

        const review = new Review({
            productId, // This comes from req.params
            author,    // This comes from req.body
            rating,    // This comes from req.body
            comment    // This comes from req.body
        });

        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        // Mongoose validation errors (like 'required' or 'min'/'max' for rating) will often result in err.name === 'ValidationError'
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: "Validation Error", errors: err.errors });
        }
        // Handle cases where the productId format is invalid for Product.findById
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ message: "Product not found (invalid ID format for product check)" });
        }
        res.status(500).json({ message: `Error creating review: ${err.message}` }); // Use 500 for unexpected server errors
    }
});

module.exports = router;