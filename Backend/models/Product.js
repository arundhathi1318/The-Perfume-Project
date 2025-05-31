const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true }, 
    description: { type: String, required: true },
    shortDescription: { type: String, required: true }, 
    price: { type: Number, required: true },
    images: [{ type: String }], 
    sizes: [{ type: String }], 
    category: String, // Optional
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);