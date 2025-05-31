import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';   

import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

const heroSlidesData = [
  {
    id: 1,
    imageUrl: "https://wallpapercave.com/wp/wp1879472.jpg",
    tagline: "Every Scent a Story, Every Bottle a Beginning.",
    description: "Discover a world of exquisite fragrances, crafted to captivate your senses and define your unique essence.",
    offerText: "🌸 Spring Fling! 20% OFF All Floral Scents! 🌸", // Added offer text
    offerLink: "/collections/floral" // Optional: link for the offer
  },
  {
    id: 2,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/65a01343d4e0b521531eda0a/1704989566006-CYT5JWM02ZTV7JWGLOG9/lifestyle+perfume+fragrence+bottles+with+heather+and+thistle.jpg",
    tagline: "Unlock Your Aura.",
    description: "Experience the art of perfumery with our exclusive collection, designed for the modern connoisseur.",
    offerText: "✨ Limited Time: Free Gift with orders over $75! ✨"
  },
  {
    id: 3,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/VzUqgr8pfbNcfXrpzeVBPE.jpg",
    tagline: "Making the World Smell Better, One Spritz at a Time.",
    description: "Indulge in scents that speak volumes, transforming moments into lasting memories.",
  }
];


const HeroSection = () => {
  const scrollToProducts = () => {
    const productSection = document.getElementById('product-list-section');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!heroSlidesData || heroSlidesData.length === 0) {
    return null; // Or some fallback UI
  }
  

  return (
    <div className="hero-section swiper-hero-section"> {/* Added swiper-hero-section for specific styling */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        spaceBetween={0} // No space between slides
        slidesPerView={1} // Show one slide at a time
        loop={true} // Enable continuous loop mode
        pagination={{ clickable: true }} // Enable clickable dots
        navigation={true} // Enable Prev/Next arrows (optional)
        effect="fade" // Optional: Use fade effect instead of slide
        fadeEffect={{ crossFade: true }} // Smooth crossfade
        autoplay={{
          delay: 3000, // 5 seconds delay
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions
        }}
        className="hero-swiper-container"
      >
        {heroSlidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="hero-swiper-slide">
            {/* 
             
            */}
            <div className="slide-content-wrapper"> {/* This will be our flex container */}
              <div className="hero-image-container">
                <img src={slide.imageUrl} alt={slide.tagline || "Perfume model"} className="hero-image" />
              </div>
              <div className="hero-content">
                <h1 className="hero-tagline">{slide.tagline}</h1>
                <p className="hero-description">{slide.description}</p>
                <button onClick={scrollToProducts} className="hero-button">
                  Explore Collections
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;