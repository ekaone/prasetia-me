import Image from "next/image";
import { CheckCircle, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { MagicCard } from "@/components/magicui/magic-card";

function Feature({
  children,
  comingSoon,
}: {
  children: React.ReactNode;
  comingSoon?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 text-white/90 text-base">
      {comingSoon ? (
        <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-red-800" />
        </div>
      ) : (
        <CheckCircle className="text-green-400 w-5 h-5" />
      )}
      <span>{children}</span>
    </div>
  );
}

function GitHubButton({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 border border-white/20 rounded-xl px-5 py-2 text-white font-semibold text-base shadow-inner flex items-center gap-2"
    >
      <Image src="/github.svg" alt="GitHub" width={20} height={20} />
      {children}
    </Link>
  );
}

function TopCard() {
  return (
    <MagicCard>
      <div className="backdrop-blur-xs bg-white/10 rounded-2xl shadow-lg p-8 border border-white/10 max-w-3xl w-full mx-auto flex flex-col gap-4 relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-white border border-white/20">
            <span>⚡</span>
          </div>
          <span className="text-white font-bold text-xl flex-1">
            Cognitia Platform
          </span>
          <Link
            href="https://www.cognitia.space/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white/20 transition"
          >
            <LinkIcon className="w-6 h-6" />
          </Link>
        </div>
        <p className="text-white/70 mb-2">
          I build a cognitive testing and mental wellness platform. Cognitia
          offers a range of cognitive tests, including verbal fluency tasks,
          word recall tests, and digit span tests. The platform leverages AI to
          analyze user inputs and provide insights into cognitive performance.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2">
          <Feature>Word Recall Test</Feature>
          <Feature>Verbal Fluency Tasks</Feature>
          <Feature>Digit Span Test</Feature>
          <Feature>Trail Making Test</Feature>
          <Feature comingSoon>MMSE/MoCA</Feature>
          <Feature comingSoon>Clock Drawing</Feature>
        </div>
        <div className="flex justify-end">
          <GitHubButton link="https://github.com/ekaone/cognitia">
            GitHub
          </GitHubButton>
        </div>
      </div>
    </MagicCard>
  );
}

function ServiceCard({
  title,
  desc,
  link,
  code,
}: {
  title: string;
  desc: string;
  link: string;
  code: string;
}) {
  return (
    <div className="backdrop-blur-xs bg-white/10 rounded-2xl shadow-lg p-8 border border-white/10 w-full flex flex-col gap-4 relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-white border border-white/20">
          <span>🖥️</span>
        </div>
        <span className="text-white font-bold text-lg flex-1">{title}</span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white/20 transition"
        >
          <LinkIcon className="w-5 h-5" />
        </Link>
      </div>
      <p className="text-white/70 mb-2">{desc}</p>
      <div className="flex justify-end">
        <GitHubButton link={code}>GitHub</GitHubButton>
      </div>
    </div>
  );
}

export default function Scratch() {
  return (
    <div className="relative flex flex-col items-center w-full my-8 mt-[10rem] gap-8">
      {/* Background SCRATCH text */}
      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[11rem] font-extrabold text-white/10 radio-canada-big select-none z-0 tracking-tight pointer-events-none">
        SCRATCH
      </span>
      {/* Cards */}
      <div className="relative z-10 w-full flex flex-col items-center gap-6">
        <TopCard />
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Voice UI Navigation"
            desc="Voice assistant that can navigate the UI of schedule and requirements components"
            link="https://github.com/ekaone/ai-voice-ui-navigation"
            code="https://github.com/ekaone/ai-voice-ui-navigation"
          />
          <ServiceCard
            title="The side Scrolling Game"
            desc="Bolty is a simple side-scrolling game"
            link="https://fly-with-bolty.netlify.app/"
            code="https://github.com/ekaone/fly-with-bolty"
          />
        </div>
      </div>
    </div>
  );
}
