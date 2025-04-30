import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/magicui/marquee";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Jack",
    description:
      "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    description: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "John",
    description: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jane",
    description: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jenny",
    description: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "James",
    description: "I'm at a loss for words. This is amazing. I love it.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="flex flex-row items-center space-x-4 mx-4 border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col items-start">
        <div className="text-sm font-medium dark:text-white">{name}</div>
        <p className="text-xs font-medium dark:text-white/40">{description}</p>
      </div>
    </div>
  );
};

export function MarqueeScratch() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mx-4">
      <Marquee pauseOnHover>
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
