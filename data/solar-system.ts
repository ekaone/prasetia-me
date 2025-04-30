export type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
};

export type Planet = {
  name: string;
  size: number;
  orbitRadius: number;
  color: string;
  period: number;
  description: string;
  rings?: boolean;
};

export const generateStars = (count: number = 50): Star[] => {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    });
  }
  return stars;
};

export const planets: Planet[] = [
  {
    name: "Mercury",
    size: 4,
    orbitRadius: 70,
    color: "#A7A7A7",
    period: 4.1,
    description: "Closest to the Sun, smallest, and fastest planet",
  },
  {
    name: "Venus",
    size: 6,
    orbitRadius: 100,
    color: "#E39E1C",
    period: 1.6,
    description: "Hottest planet with thick clouds of sulfuric acid",
  },
  {
    name: "Earth",
    size: 6.5,
    orbitRadius: 130,
    color: "#2E67AC",
    period: 1,
    description: "Our home planet, the only known world with life",
  },
  {
    name: "Mars",
    size: 5,
    orbitRadius: 160,
    color: "#C1440E",
    period: 0.53,
    description: "The Red Planet with the largest volcano in the solar system",
  },
  {
    name: "Jupiter",
    size: 14,
    orbitRadius: 200,
    color: "#E0A064",
    period: 0.084,
    description: "Largest planet with a Great Red Spot storm",
  },
  {
    name: "Saturn",
    size: 12,
    orbitRadius: 240,
    color: "#EAD6B8",
    period: 0.034,
    rings: true,
    description: "Famous for its spectacular ring system",
  },
  {
    name: "Uranus",
    size: 10,
    orbitRadius: 280,
    color: "#93C9DB",
    period: 0.012,
    description: "Ice giant that rotates on its side",
  },
  {
    name: "Neptune",
    size: 9,
    orbitRadius: 320,
    color: "#4081E1",
    period: 0.006,
    description: "Windiest planet with dark blue storms",
  },
];
