"use client";

import { useState, useRef } from "react";
import { IoMdMusicalNote } from "react-icons/io";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 ${
          isPlaying ? "animate-pulse" : ""
        }`}
        aria-label="Toggle music"
      >
        <IoMdMusicalNote
          className={`text-2xl ${isPlaying ? "animate-spin-slow" : ""}`}
        />
      </button>
      <audio
        ref={audioRef}
        src="/music/background-music.mp3"
        loop
        className="hidden"
      />
    </div>
  );
}
