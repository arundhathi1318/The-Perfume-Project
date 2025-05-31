import React from "react";
import Banner from "../components/Banner.jsx";          
import ProductList from "../components/ProductList.jsx";
import HeroSection from '../components/HeroSection.jsx';
import Footer from "../components/Footer.jsx";
import OffersSection from "../components/OffersSection.jsx";

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      
      <ProductList />
      <Footer/>
    </div>
  );
};

export default HomePage;