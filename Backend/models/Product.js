// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }], // Array of image URLs
    sizes: [{ type: String }], // e.g., ["50ml", "100ml"]
    category: String, // Optional
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);