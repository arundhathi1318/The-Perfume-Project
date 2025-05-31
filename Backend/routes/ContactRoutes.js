const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields (name, email, message) are required.' });
    }
    try {
        const newContactMessage = new ContactMessage({
            name,
            email,
            message,
        });

        const savedMessage = await newContactMessage.save();
        res.status(201).json({
            message: 'Message received successfully! We will get back to you soon.',
            data: savedMessage,
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ message: 'Validation Error', errors });
        }
        console.error('Error saving contact message:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;