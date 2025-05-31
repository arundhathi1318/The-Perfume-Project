// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/products');
const reviewRoutes = require('./routes/reviews');

// Mock data and models for seeding
const Product = require('./models/Product');
const Review = require('./models/Review'); // Though reviews will be added via app
const { products: mockProductsData } = require('./data/mockdata');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// DB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected...');
        seedDatabase(); // Call seeding function after connection
    })
    .catch(err => console.error('MongoDB Connection Error:', err));

// Seeding function (optional - good for initial setup)
const seedDatabase = async () => {
    try {
        // Clear existing products to avoid duplicates on restart IF NEEDED
        // await Product.deleteMany({});
        // console.log('Old products cleared.');

        const productCount = await Product.countDocuments();
        if (productCount === 0) {
            await Product.insertMany(mockProductsData);
            console.log('Database seeded with products!');
        } else {
            console.log('Products already exist in database. Skipping seed.');
        }
        
        // You could seed reviews here if you had predefined ones and knew product IDs
        // For example, after products are seeded:
        // const firstProduct = await Product.findOne();
        // if (firstProduct) {
        //    const reviewCount = await Review.countDocuments({ productId: firstProduct._id });
        //    if (reviewCount === 0) {
        //        await Review.create({ productId: firstProduct._id, author: "Seed User", rating: 5, comment: "Great product from seed!" });
        //        console.log('Sample review seeded for the first product.');
        //    }
        // }

    } catch (error) {
        console.error('Error seeding database:', error);
    }
};


// API Routes
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);

// Basic root route
app.get('/', (req, res) => {
    res.send('Perfume Shop API Running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});