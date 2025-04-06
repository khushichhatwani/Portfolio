"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {

  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-pink-50 via-white to-pink-100 ">
      {/* ✨ Spotlights for ambient glow */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-60"
        fill="#ffe4e6"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full opacity-50"
        fill="#e0e7ff"
      />
      <Spotlight
        className="left-80 top-28 h-[80vh] w-[50vw] opacity-40"
        fill="#dbeafe"
      />

      {/* 🌸 Faint grid background */}
      <div className="absolute inset-0 bg-grid-pink-200/[0.04] pointer-events-none z-0" />

      {/* 🌟 Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600 drop-shadow-md">
          Hi, I’m <span className="text-indigo-600 animate-pulse">Khushi 💖</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-700">
        I m a creative Software Developer who loves crafting elegant, functional digital experiences. Whether it's a sleek website or a smooth mobile app, I focus on blending beautiful design with clean, efficient code. I don’t just build projects—I shape experiences that are intuitive, responsive, and meaningful.
        </p>
        {/* ✨ CTA Button */}
        <div className="mt-8 flex justify-center">
          <MagicButton
            title="Explore My Work"
            icon={<FaLocationArrow />}
            position="right"            
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
