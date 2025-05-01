import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

function TopCard() {
  return (
    <div className="backdrop-blur-xs bg-white/10 rounded-2xl shadow-lg p-8 border border-white/10 max-w-3xl w-full mx-auto flex flex-col gap-4 relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-white border border-white/20">
          <span>📖</span>
        </div>
        <span className="text-white font-bold text-xl flex-1">Blog Posts</span>
        <Link
          href="https://www.blog.prasetia.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white/20 transition"
        >
          <LinkIcon className="w-6 h-6" />
        </Link>
      </div>
      <p className="text-white/70 mb-2">
        I write about web development, AI, and modern tech topics on my blog.
        Recent posts include guides on React components, prompt engineering,
        Generative AI, vector databases and many more.
      </p>
    </div>
  );
}

export default function Blog() {
  return (
    <div className="relative flex flex-col items-center w-full my-8 mt-[10rem] gap-8">
      {/* Background SCRATCH text */}
      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[11rem] font-extrabold text-white/10 radio-canada-big select-none z-0 tracking-tight pointer-events-none">
        Blog
      </span>
      {/* Cards */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <TopCard />
      </div>
    </div>
  );
}
