import React, { useState, useEffect } from "react";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: slider1,
      title: "Unleash the Action",
      description: "Experience the best of high-octane movies and thrilling adventures.",
    },
    {
      id: 2,
      image: slider2,
      title: "Dive into Drama",
      description: "Heartfelt stories that will move your soul and keep you hooked.",
    },
    {
      id: 3,
      image: slider3,
      title: "Laugh Out Loud",
      description: "Comedies to brighten your day with nonstop laughter.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full mb-20 overflow-hidden rounded-2xl">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative h-[600px] md:h-[500px]"
          >
            {/* Slide Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Slide Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center gap-4 px-4">
              <h1 className="text-white text-4xl lg:text-6xl font-bold">
                {slide.title}
              </h1>
              <p className="text-white/80 text-sm lg:text-xl max-w-[800px]">
                {slide.description}
              </p>
              <Link
              to={'/allmovies'}
              >
              <button className="btn bg-mainClr text-white border-none">
                Watch Action
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-mainClr" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
