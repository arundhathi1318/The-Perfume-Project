// frontend/src/components/ReviewList.js
import React from 'react';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} style={{ color: i <= rating ? '#f5a623' : '#ccc' }}>
                ★
            </span>
        );
    }
    return <span className="rating">{stars}</span>;
};

const ReviewList = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return <p>No reviews yet. Be the first to review!</p>;
    }

    return (
        <div className="review-list">
        {reviews.map(review => (
            <div key={review._id} className="review-item">
            <strong>{review.author}</strong>
            <StarRating rating={review.rating} />
            <p>{review.comment}</p>
            <small>{new Date(review.createdAt).toLocaleDateString()}</small>
            </div>
        ))}
        </div>
    );
};

export default ReviewList;