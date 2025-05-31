// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true }, // Added trim: true - good practice
    description: { type: String, required: true },
    shortDescription: { type: String, required: true }, // Make sure your mockData uses this exact field name
    price: { type: Number, required: true },
    images: [{ type: String }], // Array of image URLs
    sizes: [{ type: String }], // e.g., ["50ml", "100ml"]
    category: String, // Optional
    // No need to store reviews array here, as reviews are a separate collection
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);