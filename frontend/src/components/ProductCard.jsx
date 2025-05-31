// frontend/src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
return (
    <Link to={`/product/${product._id}`} className="product-card">
    <img src={product.images[0] || 'https://via.placeholder.com/300x200.png?text=Perfume'} alt={product.name} />
    <div className="product-card-content">
        <div>
            <h3>{product.name}</h3>
            <p className="description">{product.shortDescription}</p>
        </div>
        <p className="price">${product.price.toFixed(2)}</p>
    </div>
    </Link>
);
};

export default ProductCard;