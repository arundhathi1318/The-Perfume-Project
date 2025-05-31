// frontend/src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../services/api';

const ProductList = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchProducts = async () => {
    try {
        setLoading(true);
        const response = await getProducts();
        console.log('Fetched products in ProductList:', response.data);
        setProducts(response.data);
        setError(null);
    } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setProducts([]); // Clear products on error
    } finally {
        setLoading(false);
    }
    };
    fetchProducts();
}, []);

if (loading) return <p style={{textAlign: 'center', fontSize: '1.2em'}}>Loading products...</p>;
if (error) return <p style={{textAlign: 'center', color: 'red', fontSize: '1.2em'}}>{error}</p>;
if (products.length === 0) return <p style={{textAlign: 'center', fontSize: '1.2em'}}>No products found.</p>;

// frontend/src/components/ProductList.js
// ... (imports and state logic) ...
return (
    <div id="product-list-section" className="container">
        <h2 className="product-list-title">Featured Perfumes</h2>
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    </div>
);
// ...
};

export default ProductList;