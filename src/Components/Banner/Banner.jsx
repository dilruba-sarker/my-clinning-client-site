import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pic1 from '../../assets/clean.png';
import pic2 from '../../assets/pic1.png'

const events = [
  {
    image: pic1,
    title: 'STANDARD EVENT NAME HERE',
    date: '15 October at 20:00 - 22:00',
    location: 'on Manhattan / New York'
  },
  {
    image: pic2,
    title: 'TECH CONFERENCE 2025',
    date: '22 November at 10:00 - 14:00',
    location: 'in Dhaka / Bangladesh'
  },
  // Add more slides as needed
];

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        className="h-[500px] w-full"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {event.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white mb-6">
                    {event.date} <br /> {event.location}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-300">
                      REGISTER NOW
                    </button>
                    <button className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-medium rounded-md transition-colors duration-300">
                      WATCH VIDEO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-prev !text-white !w-12 !h-12 !rounded-full !bg-black/50 hover:!bg-black/70 after:!text-xl"></div>
        <div className="swiper-button-next !text-white !w-12 !h-12 !rounded-full !bg-black/50 hover:!bg-black/70 after:!text-xl"></div>
      </Swiper>

      {/* Custom pagination style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #dc2626; /* red-600 */
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Banner;