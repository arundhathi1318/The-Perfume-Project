// frontend/src/pages/ProductPage.js
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, getReviewsByProductId } from '../services/api';
import ImageGallery from '../components/ImageGallery.jsx';
import ReviewList from '../components/ReviewList.jsx';
import ReviewForm from '../components/ReviewForm.jsx';
import ShareButton from '../components/ShareButton.jsx';

const ProductPage = () => {
const { id } = useParams();
const [product, setProduct] = useState(null);
const [reviews, setReviews] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [selectedSize, setSelectedSize] = useState(null);


const fetchProductData = useCallback(async () => {
    try {
        setLoading(true);
        const productResponse = await getProductById(id);
        setProduct(productResponse.data);
        if (productResponse.data && productResponse.data.sizes && productResponse.data.sizes.length > 0) {
            setSelectedSize(productResponse.data.sizes[0]);
        }
        
        const reviewsResponse = await getReviewsByProductId(id);
        setReviews(reviewsResponse.data);
        setError(null);
    } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details. Please try again later.");
        setProduct(null);
        setReviews([]);
    } finally {
        setLoading(false);
    }
}, [id]);

useEffect(() => {
    fetchProductData();
}, [fetchProductData]);

const handleReviewAdded = () => {
    // Re-fetch reviews when a new one is added
    getReviewsByProductId(id)
    .then(response => setReviews(response.data))
    .catch(err => console.error("Error refreshing reviews:", err));
};

if (loading) return <p style={{textAlign: 'center', fontSize: '1.2em', marginTop: '30px'}}>Loading product...</p>;
if (error) return <p style={{textAlign: 'center', color: 'red', fontSize: '1.2em', marginTop: '30px'}}>{error}</p>;
if (!product) return <p style={{textAlign: 'center', fontSize: '1.2em', marginTop: '30px'}}>Product not found.</p>;

return (
    <div className="container product-page-container">
    <div className="product-detail-layout">
        <ImageGallery images={product.images} />
        <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        
        {product.sizes && product.sizes.length > 0 && (
            <div className="sizes">
                <strong>Available Sizes:</strong>
                {product.sizes.map(size => (
                    <span 
                        key={size} 
                        className={selectedSize === size ? 'selected' : ''}
                        onClick={() => setSelectedSize(size)}
                        style={{cursor: 'pointer', margin: '0 5px', padding: '5px 10px', border: '1px solid #ccc', borderRadius: '4px'}}
                    >
                        {size}
                    </span>
                ))}
            </div>
        )}
        
        <ShareButton productUrl={window.location.href} productName={product.name} />
        </div>
    </div>

    <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <ReviewList reviews={reviews} />
        <ReviewForm productId={product._id} onReviewAdded={handleReviewAdded} />
    </div>
    </div>
);
};

export default ProductPage;