import Hero from "@/components/hero";
import Stack from "@/components/stack";
import SolarSystem from "@/components/solar-system";
import { Metadata } from "next";

// Function to generate a creative title using AI
async function generateAITitle() {
  // For now, we'll use a simple array of creative titles
  // In a real implementation, you would call an AI API here
  const creativeTitles = [
    "Digital Explorer",
    "Code & Creativity",
    "Building Digital Dreams",
    "Where Code Meets Art",
    "Digital Innovation Hub",
  ];

  // Randomly select a title
  return creativeTitles[Math.floor(Math.random() * creativeTitles.length)];
}

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
      {/* <SolarSystem /> */}
    </div>
  );
}
