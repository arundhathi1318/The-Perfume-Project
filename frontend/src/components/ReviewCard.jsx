import React from 'react';
import './ReviewCard.css'; 

const getInitials = (name) => {
  if (!name || typeof name !== 'string') return '?';
  const names = name.trim().split(' ');
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
};
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={starValue} className={starValue <= rating ? 'star filled' : 'star empty'}>
            ★ {/* Filled star */}
          </span>
        );
      })}
    </div>
  );
};


const ReviewCard = ({ review }) => {
  const { author, rating, comment, createdAt } = review;
  const initials = getInitials(author);
  // A simple array of placeholder avatar background colors
  const avatarColors = ['#FFC107', '#007BFF', '#28A745', '#DC3545', '#6F42C1', '#FD7E14'];
  // Get a consistent color based on initials length or first char code
  const colorIndex = (initials.charCodeAt(0) || 0) % avatarColors.length;
  const avatarBgColor = avatarColors[colorIndex];


  return (
    <div className="review-card">
      <div className="review-author-profile">
        <div className="review-avatar" style={{ backgroundColor: avatarBgColor }}>
          {initials}
        </div>
        <div className="review-author-info">
          <span className="review-author-name">{author || 'Anonymous'}</span>
          {createdAt && (
            <span className="review-date">
              {new Date(createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </div>
      </div>
      <div className="review-rating">
        <StarRating rating={rating} />
      </div>
      <p className="review-comment">{comment}</p>
    </div>
  );
};

export default ReviewCard;