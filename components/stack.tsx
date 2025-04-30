import Image from "next/image";

function StackCards() {
  const stacks = [
    {
      title: "JavaScript",
      subtitle: "Language",
      img: "/images/javascript.svg",
    },
    {
      title: "TypeScript",
      subtitle: "Language",
      img: "/images/typescript.svg",
    },
    { title: "Node.js", subtitle: "Runtime", img: "/images/nodejs.svg" },
    { title: "React", subtitle: "Library", img: "/images/react.svg" },
    {
      title: "PostgreSQL",
      subtitle: "Database",
      img: "/images/postgresql.svg",
    },
    { title: "Python", subtitle: "Language", img: "/images/python.svg" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto mt-2">
      {stacks.map((stack) => (
        <div
          key={stack.title}
          className="backdrop-blur-xs bg-white/10 rounded-2xl shadow-lg p-4 flex items-center gap-4 min-h-[90px] border border-white/10"
        >
          {/* Stack image/icon */}
          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
            <Image src={stack.img} alt={stack.title} width={40} height={40} />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg font-semibold radio-canada-big">
              {stack.title}
            </span>
            <span className="text-white/60 text-sm radio-canada">
              {stack.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Stack() {
  return (
    <div className="relative flex flex-col items-center w-full my-8 mt-20">
      {/* Background STACK text */}
      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[16rem] font-extrabold text-white/10 radio-canada-big select-none z-0 tracking-tight pointer-events-none">
        STACK
      </span>
      {/* Stack Cards */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <StackCards />
      </div>
    </div>
  );
}
