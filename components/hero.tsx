"use client";

import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-30 max-w-3xl">
      {/* Centered Logo */}
      <div className="flex justify-center mb-20">
        <div className="rounded-full overflow-hidden bg-opacity-20 shadow-lg">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      {/* Glassmorphism Card */}
      <div className="mt-8 flex justify-center items-center h-[300px] md:h-[200px]">
        <div
          className="backdrop-blur-md border border-white/10 border-opacity-10 rounded-xl bg-opacity-50 p-8 flex items-center justify-center w-full h-full relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-2xl text-center radio-canada">
            I{" "}
            <span
              className={`transition-colors duration-300 ${
                isHovered ? "text-orange-500" : "text-amber-50"
              }`}
            >
              constantly
            </span>{" "}
            seek out new challenges and embrace the ever-evolving tech
            landscape.{" "}
            <span
              className={`transition-colors duration-300 ${
                isHovered ? "text-orange-500" : "text-amber-50"
              }`}
            >
              Experimenting
            </span>{" "}
            with the latest web technologies
          </span>
          {isHovered && (
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-green-500 to-transparent"
            />
          )}
        </div>
      </div>
    </div>
  );
}
