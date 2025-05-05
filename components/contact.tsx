"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ContactChat } from "@/components/contact-chat";

export default function Contact() {
  const [, setSubmittedValue] = useState<string | null>(null);

  const handleSubmit = (value: string) => {
    setSubmittedValue(value);
    console.log(value);
  };

  return (
    <div className="relative flex flex-col items-center w-full my-8 mt-[10rem] gap-8">
      {/* Background SCRATCH text */}
      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[11rem] font-extrabold text-white/10 radio-canada-big select-none z-0 tracking-tight pointer-events-none">
        CONTACT
      </span>
      {/* Icons */}
      <div className="relative w-full flex flex-col md:items-end items-center mt-[5rem] md:mt-[6rem]">
        <ContactChat
          placeholder="Enter your message"
          onSubmit={handleSubmit}
          className="mt-8 mb-8"
        />
        <div className="w-full my-4">
          <Separator className="bg-white/10" />
        </div>
      </div>
    </div>
  );
}
