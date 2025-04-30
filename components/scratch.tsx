function ScratchCard() {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-lg p-8 border border-white/10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">Experiments</h2>
      <p className="text-white/70">
        I have a lot of experiments that I want to share with you.
      </p>
    </div>
  );
}

export default function Scratch() {
  return (
    <div className="relative flex flex-col items-center w-full my-8 mt-[10rem]">
      {/* Background STACK text */}
      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[11rem] font-extrabold text-white/10 radio-canada-big select-none z-0 tracking-tight pointer-events-none">
        SCRATCH
      </span>
      {/* Stack Cards */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <ScratchCard />
      </div>
    </div>
  );
}
