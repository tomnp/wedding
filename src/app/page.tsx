"use client";

import Image from "next/image";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import CountdownTimer from "@/components/CountdownTimer";
import ParentsSection from "@/components/ParentsSection";
import Gallery from "@/components/Gallery";
import Navigation from "@/components/Navigation";
import MusicPlayer from "@/components/MusicPlayer";
import CoupleIntro from "@/components/CoupleIntro";
import Slideshow from "@/components/Slideshow";
import RsvpModal from "@/components/RsvpModal";
import { ClassicDesign as Guestbook } from "@/components/Guestbook";

const playfair = Playfair_Display({ subsets: ["vietnamese"] });

export default function Home() {
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navigation />
      <MusicPlayer />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
      >
        <Slideshow />
        <div className="z-10 text-center animate-fade-in">
          <h2 className="text-xl text-white mb-4">SAVE THE DATE</h2>
          <h1 className="font-great-vibes text-6xl md:text-8xl text-white mb-6">
            Phát Nghị
            <span className="block text-4xl md:text-5xl my-4">&</span>
            Chung Thảo
          </h1>
          <div className="text-lg md:text-xl text-white space-y-2">
            <p>03 tháng 08 năm 2025</p>
          </div>
          <button
            onClick={() => scrollToSection("guestbook")}
            className="mt-8 px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-rose-700 transition-colors"
          >
            Gửi lời chúc
          </button>
        </div>
      </section>

      {/* Countdown & RSVP Section */}
      <section
        id="countdown"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-great-vibes text-4xl md:text-5xl text-center text-rose-700 mb-12">
            The Big Day!
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left side - Save the Date */}
            <div className="relative p-8 border border-rose-200 rounded-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Image
                  src="/images/icons/rings.svg"
                  alt="Rings icon"
                  width={32}
                  height={16}
                  className="text-rose-600"
                />
              </div>
              <div className="text-center text-rose-700">
                <h3 className="font-great-vibes text-5xl mb-2">Save</h3>
                <p className="font-great-vibes text-2xl mb-2">THE</p>
                <p className="font-great-vibes text-5xl">Date</p>
              </div>
            </div>

            {/* Right side - Names and RSVP */}
            <div className="bg-rose-100/50 p-8 rounded-lg text-center">
              <h3 className="font-great-vibes text-4xl text-rose-700 mb-2">
                Phát Nghị
                <span className="block text-2xl my-1">&</span>
                Chung Thảo
              </h3>
              <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng
                mình có thêm một niềm hạnh phúc!
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection("guestbook")}
                  className="w-full max-w-xs px-6 py-2 border border-rose-700 text-rose-700 rounded-full hover:bg-rose-700 hover:text-white transition-colors"
                >
                  GỬI LỜI CHÚC
                </button>
                <button
                  onClick={() => setIsRsvpModalOpen(true)}
                  className="w-full max-w-xs px-6 py-2 border border-rose-700 text-rose-700 rounded-full hover:bg-rose-700 hover:text-white transition-colors"
                >
                  XÁC NHẬN THAM DỰ
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <CountdownTimer targetDate="2025-08-03T17:00:00" />
          </div>
        </div>
      </section>

      {/* Parents Section */}
      <ParentsSection />

      {/* Couple Introduction Section */}
      <section id="couple">
        <CoupleIntro />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Guestbook Section */}
      <Guestbook />

      <RsvpModal
        isOpen={isRsvpModalOpen}
        onClose={() => setIsRsvpModalOpen(false)}
      />
    </main>
  );
}
