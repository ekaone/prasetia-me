import Hero from "@/components/hero";
import Stack from "@/components/stack";
import Scratch from "@/components/scratch";
// import SolarSystem from "@/components/solar-system";
import { Metadata } from "next";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import { cache, Suspense } from "react";
import { ParticlesWrapper } from "@/components/particles-wrapper";

// Function to generate a creative title using AI
// Cached per request to ensure consistent title within same request
const generateAITitle = cache(async () => {
  // A simple array of creative titles
  // In a real implementation, can call an AI API here
  const creativeTitles = [
    "Digital Explorer",
    "Code & Creativity",
    "Building Digital Dreams",
    "Where Code Meets Art",
    "Digital Innovation Hub",
  ];

  // Randomly select a title
  return creativeTitles[Math.floor(Math.random() * creativeTitles.length)];
});

export async function generateMetadata(): Promise<Metadata> {
  const title = await generateAITitle();

  return {
    title,
    description: "Personal website",
    openGraph: {
      title,
      description: "Personal website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Personal website",
      images: ["/og-image.png"],
    },
  };
}

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-8 max-w-3xl mx-auto">
      <Hero />
      <Stack />
      <Scratch />
      <Suspense fallback={<div className="w-full h-64 animate-pulse bg-white/5 rounded-2xl" />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<div className="w-full h-64 animate-pulse bg-white/5 rounded-2xl" />}>
        <Contact />
      </Suspense>
      <ParticlesWrapper
        className="fixed inset-0 top-0 left-0 w-full h-full -z-[10] pointer-events-none"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      {/* <SolarSystem /> */}
    </div>
  );
}
