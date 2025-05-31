// frontend/src/pages/HomePage.jsx
import React from "react";
import Banner from "../components/Banner.jsx";          // Corrected path
import ProductList from "../components/ProductList.jsx";
import HeroSection from '../components/HeroSection.jsx';
import Footer from "../components/Footer.jsx";
import OffersSection from "../components/OffersSection.jsx";
 // This path was already correct

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <OffersSection/>
      <ProductList />
      <Footer/>
    </div>
  );
};

export default HomePage;