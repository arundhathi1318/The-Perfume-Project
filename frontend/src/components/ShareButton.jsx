// frontend/src/components/ShareButton.js
import React from 'react';

const ShareButton = ({ productUrl, productName }) => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Check out ${productName}!`,
                    text: `I found this amazing perfume: ${productName}`,
                    url: productUrl,
                });
                console.log('Product shared successfully');
            } catch (error) {
                console.error('Error sharing:', error);
                // Fallback for desktop or if user cancels share
                alert(`Share this link: ${productUrl}`);
            }
        } else {
            // Fallback for browsers that don't support navigator.share
            // You could open a new window with Twitter share intent, for example
            const twitterShareUrl = `https://twitter.com/intent/tweet?text=Check%20out%20${encodeURIComponent(productName)}!&url=${encodeURIComponent(productUrl)}`;
            window.open(twitterShareUrl, '_blank');
            // alert(`Share this link: ${productUrl}`);
        }
    };

    return (
        <button onClick={handleShare} className="share-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </svg>
            Share
        </button>
    );
};

export default ShareButton;