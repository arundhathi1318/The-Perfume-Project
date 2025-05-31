// frontend/src/components/ReviewForm.js
import React, { useState } from 'react';
import { addReview } from '../services/api';

const ReviewForm = ({ productId, onReviewAdded }) => {
const [author, setAuthor] = useState('');
const [rating, setRating] = useState(5);
const [comment, setComment] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!comment.trim() || rating < 1 || rating > 5) {
        setError('Please provide a valid rating and comment.');
        return;
    }

    try {
        const reviewData = {
            author: author.trim() === '' ? 'Anonymous' : author,
            rating: parseInt(rating),
            comment
        };
        await addReview(productId, reviewData);
        setSuccess('Review submitted successfully!');
        setAuthor('');
        setRating(5);
        setComment('');
        if (onReviewAdded) {
            onReviewAdded(); // Callback to refresh reviews list
        }
    } catch (err) {
        console.error("Error submitting review:", err);
        setError(err.response?.data?.message || 'Failed to submit review. Please try again.');
    }
};

return (
    <form onSubmit={handleSubmit} className="review-form">
    <h3>Leave a Review</h3>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {success && <p style={{ color: 'green' }}>{success}</p>}
    <div>
        <label htmlFor="author">Name (Optional):</label>
        <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
        {[5, 4, 3, 2, 1].map(num => (
            <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
        ))}
        </select>
    </div>
    <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        />
    </div>
    <button type="submit">Submit Review</button>
    </form>
);
};

export default ReviewForm;