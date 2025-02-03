"use client";

import { useState, useEffect } from "react";
import { IoClose, IoArrowBack, IoArrowForward } from "react-icons/io5";

type ImageLightboxProps = {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <IoClose size={24} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <IoArrowBack size={24} />
      </button>

      <div className="relative w-full h-full max-w-4xl max-h-[90vh] mx-auto flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-full object-contain"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Next image"
      >
        <IoArrowForward size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
