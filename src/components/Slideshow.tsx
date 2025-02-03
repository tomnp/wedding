"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const backgroundImages = [
  "/images/gallery/photo1.jpeg",
  "/images/gallery/photo2.jpeg",
  "/images/gallery/photo3.jpeg",
  "/images/gallery/photo4.jpeg",
  "/images/gallery/photo5.jpeg",
  "/images/gallery/photo6.jpeg",
  "/images/gallery/photo7.jpeg",
  "/images/gallery/photo8.jpeg",
  "/images/gallery/photo9.jpeg",
  "/images/gallery/photo10.jpeg",
  "/images/gallery/photo11.jpeg",
  "/images/gallery/photo12.jpeg",
  "/images/gallery/photo13.jpeg",
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ht-slideshow absolute inset-0 overflow-hidden">
      <div className="ht-slides relative h-full w-full">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`ht-slide absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt="Slideshow background"
              fill
              className="object-cover"
              style={{
                animation:
                  currentSlide === index ? "zoomEffect 4s ease-in-out" : "none",
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
