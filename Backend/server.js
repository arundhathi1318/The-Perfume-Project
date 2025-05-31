require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/products');
const reviewRoutes = require('./routes/reviews');
const contactRoutes = require('./routes/ContactRoutes');

const Product = require('./models/Product');
const { products: mockProductsData } = require('./data/mockdata.js');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.DEPLOYED_FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.warn(`CORS: Origin ${origin} not allowed.`);
            callback(new Error(`Origin ${origin} not allowed by CORS`));
        }
    },
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const seedDatabase = async () => {
    try {
        const productCount = await Product.countDocuments();
        if (productCount === 0 && mockProductsData && mockProductsData.length > 0) {
            console.log('No products found, seeding database...');
           
            await Product.insertMany(mockProductsData);
            console.log('Database seeded with products!');
        } else if (productCount > 0) {
            console.log('Products already exist. Seeding skipped.');
        } else {
            console.log('No mock product data provided or product count > 0. Seeding skipped.');
        }
    } catch (error) {
        console.error('Error seeding database:', error.message);
    }
};

if (!process.env.MONGODB_URI) {
    console.error("FATAL ERROR: MONGODB_URI environment variable is not set.");
    if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
        process.exit(1);
    }
}

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected...');
        seedDatabase();
    })
    .catch(err => console.error('MongoDB Connection Error:', err.message));

app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/contact', contactRoutes);

app.get('/api', (req, res) => {
    res.json({ message: 'Perfume Shop API Running!' });
});

app.use((err, req, res, next) => {
    console.error("Global Error Handler Triggered:", err.stack);
    res.status(err.status || 500).send({
        error: 'An unexpected error occurred!',
        message: err.message || 'Internal Server Error'
    });
});

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running locally on http://localhost:${PORT}`);
    });
}

module.exports = app;
