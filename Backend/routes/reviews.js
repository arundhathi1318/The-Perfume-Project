const express = require('express');
const router = express.Router();
const Review = require('../models/Review.js');
const Product = require('../models/Product'); 

router.get('/product/:productId', async (req, res) => {
    try {
        const reviews = await Review.find({ productId: req.params.productId }).sort({ createdAt: -1 });
        res.json(reviews);
    } catch (err) {
        if (err.kind === 'ObjectId' && err.path === 'productId') { // More specific check
            return res.status(400).json({ message: 'Invalid Product ID format for fetching reviews' });
        }
        res.status(500).json({ message: err.message });
    }
});
router.post('/product/:productId', async (req, res) => {
    const { author, rating, comment } = req.body;
    const { productId } = req.params;
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
            productId, 
            author,    
            rating,    
            comment    
        });

        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: "Validation Error", errors: err.errors });
        }
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ message: "Product not found (invalid ID format for product check)" });
        }
        res.status(500).json({ message: `Error creating review: ${err.message}` }); // Use 500 for unexpected server errors
    }
});

module.exports = router;