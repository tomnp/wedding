"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

const photos = [
  {
    src: "/images/gallery/photo1.jpeg",
    alt: "Wedding photo 1",
  },
  {
    src: "/images/gallery/photo2.jpeg",
    alt: "Wedding photo 2",
  },
  {
    src: "/images/gallery/photo3.jpeg",
    alt: "Wedding photo 3",
  },
  {
    src: "/images/gallery/photo4.jpeg",
    alt: "Wedding photo 4",
  },
  {
    src: "/images/gallery/photo5.jpeg",
    alt: "Wedding photo 5",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % photos.length
    );
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + photos.length) % photos.length
    );

  return (
    <section className="py-20 bg-[#FDF6F0] overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="font-great-vibes text-4xl md:text-5xl text-center text-rose-700 mb-16">
          Một chút ảnh ọt
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto">
          {/* Main large photo */}
          <div
            className="md:col-span-8 relative aspect-[4/3] cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
          </div>

          {/* Side photos */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
            {photos.slice(1, 3).map((photo, index) => (
              <div
                key={photo.src}
                className="relative aspect-square cursor-pointer group"
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
              </div>
            ))}
          </div>

          {/* Bottom photos */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {photos.slice(3).map((photo, index) => (
              <div
                key={photo.src}
                className="relative aspect-video cursor-pointer group"
                onClick={() => openLightbox(index + 3)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic max-w-2xl mx-auto px-4">
            "Hãy để tình yêu diễn biến thật tự nhiên, đã là duyên thì cũng chẳng
            sợ lạc đường."
          </p>
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={photos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
