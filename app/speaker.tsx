"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

export default function Speaker() {
  // Install Swiper modules
  SwiperCore.use([Autoplay, Pagination]);
  
  const speakers = [
    {
      name: 'Speaker 1',
      image: '/speaker1.jpg',
    },
    {
      name: 'Speaker 2',
      image: '/speaker2.jpg',
    },
    {
      name: 'Speaker 3',
      image: '/speaker3.jpg',
    },
  ];

  return (
    <div className="relative">
      <Swiper
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="h-96"
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.name}>
            <div className="h-full w-full bg-cover" style={{ backgroundImage: `url(${speaker.image})` }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h2 className="text-white text-4xl font-bold mb-4">{speaker.name}</h2>
                <button className="bg-button text-white px-4 py-2 rounded-full hover:bg-white hover:text-button border border-button transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}