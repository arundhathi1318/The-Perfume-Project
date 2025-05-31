// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Your backend URL

export const getProducts = () => {
    return axios.get(`${API_URL}/products`);
};

export const getProductById = (id) => {
    return axios.get(`${API_URL}/products/${id}`);
};

export const getReviewsByProductId = (productId) => {
    return axios.get(`${API_URL}/reviews/product/${productId}`);
};

export const addReview = (productId, reviewData) => {
    return axios.post(`${API_URL}/reviews/product/${productId}`, reviewData);
};