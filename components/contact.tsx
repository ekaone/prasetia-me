import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  return (
    <div className="relative flex flex-col items-center w-full my-8 mt-[10rem] gap-8">
      {/* Background SCRATCH text */}
      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[11rem] font-extrabold text-white/10 radio-canada-big select-none z-0 tracking-tight pointer-events-none">
        CONTACT
      </span>
      {/* Icons */}
      <div className="relative w-full flex flex-col md:items-end items-center mt-[5rem] md:mt-[10rem]">
        <div className="flex items-center gap-4">
          <Link
            href="https://twitter.com/twekaone"
            target="_blank"
            className="p-4 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Image
              src="/images/x-logo.png"
              alt="Twitter"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="mailto:ekaone3033@gmail.com"
            className="p-4 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <div className="w-full my-4">
          <Separator className="bg-white/10" />
        </div>
      </div>
    </div>
  );
}
