// frontend/src/pages/HomePage.jsx
import React from "react";
import Banner from "../components/Banner.jsx";          // Corrected path
import ProductList from "../components/ProductList.jsx";
import HeroSection from '../components/HeroSection.jsx';
 // This path was already correct

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ProductList />
    </div>
  );
};

export default HomePage;