import React from 'react';
import { Link } from 'react-router-dom'; 
import './OffersSection.css';

const offersData = [
  {
    id: 1,
    title: "🌸 Spring Fling! ",
    description: "Get <strong>20% OFF</strong> All Floral Scents! Refresh your collection.",
    link: "/collections/floral",
    ctaText: "Shop Floral",
    bgColor: "#FFF0F5" 
  },
  {
    id: 2,
    title: "✨ Limited Time Deal ",
    description: "Receive a <strong>Free Mystery Gift</strong> with every order over $75!",
    link: "/shop-all", 
    ctaText: "Explore Now",
    bgColor: "#E0FFFF" 
  },
  {
    id: 3,
    title: "🚚 Weekend Special! ",
    description: "Enjoy <strong>FREE SHIPPING</strong> on all orders. No minimum spend!",
    link: "/cart",
    ctaText: "View Cart",
    bgColor: "#F0FFF0" 
  }
];

const OffersSection = () => {
  if (!offersData || offersData.length === 0) {
    return null;
  }

  return (
    <section className="offers-section">
      <h2 className="offers-section-title">Today's Hottest Deals!</h2>
      <div className="offers-grid">
        {offersData.map(offer => (
          <div key={offer.id} className="offer-card" style={{ backgroundColor: offer.bgColor || '#f9f9f9' }}>
            <h3 className="offer-card-title">{offer.title}</h3>
            <p className="offer-card-description" dangerouslySetInnerHTML={{ __html: offer.description }}></p>
            {offer.link && offer.ctaText && (
              <Link to={offer.link} className="offer-card-cta">
                {offer.ctaText} →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;