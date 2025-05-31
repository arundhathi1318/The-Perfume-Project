// frontend/src/components/Banner.js
import React from 'react';
import './Banner.css'; // We'll create this for styling

const Banner = () => {
return (
    <div className="banner">
    <h1>Discover Your Signature Scent</h1>
    <p>Explore our exclusive collection of luxury perfumes.</p>
    <button className="banner-button" onClick={() => document.getElementById('product-list-section')?.scrollIntoView({ behavior: 'smooth' })}>
        Explore Collections
    </button>
    </div>
);
};

export default Banner;