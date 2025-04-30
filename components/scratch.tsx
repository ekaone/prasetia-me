import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-white/90 text-base">
      <CheckCircle className="text-green-400 w-5 h-5" />
      <span>{children}</span>
    </div>
  );
}

function GitHubButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-2 text-white font-semibold text-base shadow-inner flex items-center gap-2">
      <Image src="/github.svg" alt="GitHub" width={20} height={20} />
      {children}
    </div>
  );
}

function TopCard() {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-lg p-8 border border-white/10 max-w-3xl w-full mx-auto flex flex-col gap-4 relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-white border border-white/20">
          <span>⚡</span>
        </div>
        <span className="text-white font-bold text-xl flex-1">Experiments</span>
        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white/20 transition">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
      <p className="text-white/70 mb-2">
        I have a lot of experiments that I want to share with you, as follows:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2">
        <Feature>Demetia early detection</Feature>
        <Feature>Voice UI Navigation</Feature>
        <Feature>Bible Quiz Game</Feature>
        <Feature>Piano AI-learning</Feature>
        <Feature>many more...</Feature>
      </div>
      <div className="flex justify-end">
        <GitHubButton>GitHub</GitHubButton>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-lg p-8 border border-white/10 w-full flex flex-col gap-4 relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-white border border-white/20">
          <span>🖥️</span>
        </div>
        <span className="text-white font-bold text-lg flex-1">{title}</span>
        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white/20 transition">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <p className="text-white/70 mb-2">{desc}</p>
      <div className="flex justify-end">
        <GitHubButton>GitHub</GitHubButton>
      </div>
    </div>
  );
}

export default function Scratch() {
  return (
    <div className="relative flex flex-col items-center w-full my-8 mt-[10rem] gap-8">
      {/* Background SCRATCH text */}
      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[11rem] font-extrabold text-white/10 radio-canada-big select-none z-0 tracking-tight pointer-events-none">
        SCRATCH
      </span>
      {/* Cards */}
      <div className="relative z-10 w-full flex flex-col items-center gap-6">
        <TopCard />
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Framer Landing Page"
            desc="Interested in having us create completely unique landing page for you in Framer?"
          />
          <ServiceCard
            title="Framer Website"
            desc="Interested in having us create completely unique multi-page website for you in Framer?"
          />
        </div>
      </div>
    </div>
  );
}
