// frontend/src/components/HeroSection.jsx
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; // For dot navigation
import 'swiper/css/navigation'; // For prev/next arrows (optional)
import 'swiper/css/effect-fade'; // Optional: for a fade effect
import 'swiper/css/autoplay';   // For autoplay

// import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Your slide data remains the same
const heroSlidesData = [
  {
    id: 1,
    imageUrl: "https://wallpapercave.com/wp/wp1879472.jpg",
    tagline: "Scent Your Story.",
    description: "Discover a world of exquisite fragrances, crafted to captivate your senses and define your unique essence."
  },
  {
    id: 2,
    imageUrl: "https://wallpapercrafter.com/th800/269702-perfume-bottle-gold-and-cologne-hd.jpg",
    tagline: "Unlock Your Aura.",
    description: "Experience the art of perfumery with our exclusive collection, designed for the modern connoisseur."
  },
  {
    id: 3,
    imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f60b8374934435.5c3e93f519fd5.jpg",
    tagline: "Elegance. Bottled.",
    description: "Indulge in scents that speak volumes, transforming moments into lasting memories."
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
              Each slide will have its own background image for simplicity with Swiper's fade effect,
              or you can structure it like before with image on one side and text on other.
              Let's do the image-on-one-side, text-on-other structure within each SwiperSlide.
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