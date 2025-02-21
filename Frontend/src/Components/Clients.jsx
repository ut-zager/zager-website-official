import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

// Import your images
import slide_image_1 from './assets/images/img_1.jpg';
import slide_image_2 from './assets/images/img_2.jpg';
// Add more images as needed

function App() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Image Gallery</h1>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="Slide 1" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="Slide 2" className="w-full h-auto" />
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
}

export default App;




