// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products'); 
const reviewRoutes = require('./routes/reviews');  
const { products: mockProductsData } = require('./data/mockdata.js'); 
const app = express();
const PORT = process.env.PORT || 5000;
const seedDatabase = async () => {
    try {
   
        const productCount = await Product.countDocuments();
        if (productCount === 0 && mockProductsData && mockProductsData.length > 0) {
            console.log('No products found, seeding database...');
           
            await Product.insertMany(mockProductsData);
            console.log('Database seeded with products!');
        } else if (mockProductsData && mockProductsData.length > 0) {
            console.log('Products already exist or no mock data to seed. Seeding skipped.');
        } else {
            console.log('No mock product data provided. Seeding skipped.');
        } 

    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected...');
        seedDatabase(); 
    })
    .catch(err => console.error('MongoDB Connection Error:', err));


app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
    res.send('Perfume Shop API Running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});