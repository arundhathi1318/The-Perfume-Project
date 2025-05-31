// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx'; // VERIFY THIS IMPORT
import ContactPage from './pages/ContactPage.jsx';     // VERIFY THIS IMPORT
import LoginPage from './pages/LoginPage.jsx';         // VERIFY THIS IMPORT
import SignupPage from './pages/Signup.jsx';       // VERIFY THIS IMPORT
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main> {/* Good practice to wrap Routes output in main or a div */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* VERIFY THESE ROUTES AND THEIR ELEMENTS */}
          <Route path="/collections"  element={<CollectionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Optional: Add a catch-all for 404 pages */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;