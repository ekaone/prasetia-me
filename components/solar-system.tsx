"use client";

import React, { useState, useEffect } from "react";
import { Planet, planets } from "@/data/solar-system";

const SolarSystem = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Animation timer
    const timer = setInterval(() => {
      setRotation((prev) => (prev + 0.1) % 360);
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const [hoveredPlanet, setHoveredPlanet] = useState<Planet | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  return (
    <div className="-z-10 flex flex-col items-center justify-center w-screen h-screen bg-black text-white overflow-hidden absolute top-0 left-0">
      <div className="relative w-full h-3/4 max-w-4xl">
        {/* Orbit paths */}
        {planets.map((planet, i) => (
          <div
            key={`orbit-${i}`}
            className="absolute rounded-full border border-gray-900"
            style={{
              width: planet.orbitRadius * 2,
              height: planet.orbitRadius * 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Sun */}
        <div
          className="absolute rounded-full bg-yellow-500"
          style={{
            width: 30,
            height: 30,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow:
              "0 0 40px rgba(255, 143, 0, 0.8), 0 0 80px rgba(255, 143, 0, 0.4)",
            zIndex: 10,
          }}
          onClick={() => setSelectedPlanet(null)}
        />

        {/* Planets */}
        {planets.map((planet, i) => {
          const angle = rotation * planet.period;
          const planetX =
            Math.cos((angle * Math.PI) / 180) * planet.orbitRadius;
          const planetY =
            Math.sin((angle * Math.PI) / 180) * planet.orbitRadius;

          return (
            <React.Fragment key={`planet-${i}`}>
              {/* Planet body */}
              <div
                className="absolute rounded-full cursor-pointer transition-transform duration-300 hover:scale-125"
                style={{
                  width: planet.size * 2,
                  height: planet.size * 2,
                  backgroundColor: planet.color,
                  top: "50%",
                  left: "50%",
                  transform: `translate(calc(-50% + ${planetX}px), calc(-50% + ${planetY}px))`,
                  zIndex: 20,
                  boxShadow: `0 0 10px rgba(255, 255, 255, 0.3)`,
                }}
                onMouseEnter={() => setHoveredPlanet(planet)}
                onMouseLeave={() => setHoveredPlanet(null)}
                onClick={() => setSelectedPlanet(planet)}
              />

              {/* Saturn's rings */}
              {planet.rings && (
                <div
                  className="absolute rounded-full cursor-pointer"
                  style={{
                    width: planet.size * 5,
                    height: planet.size,
                    border: "2px solid rgba(234, 214, 184, 0.6)",
                    borderTop: "1px solid rgba(234, 214, 184, 0.3)",
                    borderBottom: "1px solid rgba(234, 214, 184, 0.3)",
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${planetX}px), calc(-50% + ${planetY}px)) rotate(20deg)`,
                    zIndex: 19,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}

        {/* hovered planet detailed info */}
        {hoveredPlanet && (
          <div
            className="absolute bg-gray-900 bg-opacity-90 p-4 rounded-lg shadow-lg"
            style={{
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
              maxWidth: "300px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div className="flex items-center mb-2">
              <div
                className="w-6 h-6 rounded-full mr-2"
                style={{ backgroundColor: hoveredPlanet.color }}
              />
              <h3 className="text-xl font-bold">{hoveredPlanet.name}</h3>
            </div>
            <p className="text-gray-300 text-sm">
              {hoveredPlanet.description || "No description available."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolarSystem;
