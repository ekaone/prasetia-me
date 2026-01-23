"use client";

import { useState, useRef, useEffect, memo } from "react";
import { useChat } from "@ai-sdk/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import Markdown from "@/components/render-markdown";

import { cn } from "@/lib/utils";

// Memoized message item component to prevent unnecessary re-renders
const MessageItem = memo(function MessageItem({
  message,
}: {
  message: { id?: string; role: string; content: string };
}) {
  return (
    <div
      className={cn(
        "flex items-center message-item",
        message.role === "user" ? "flex-row-reverse" : "flex-row"
      )}
    >
      {message.role === "user" ? (
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
          <Image src="/images/user.png" alt="User" width={32} height={32} />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
          <Image src="/images/me.png" alt="AI" width={32} height={32} />
        </div>
      )}
      <div
        className={cn(
          "flex flex-col gap-1 p-4 rounded-lg flex-1",
          message.role === "user"
            ? "bg-blue-500/10 mr-8"
            : "bg-gray-800/50 ml-8"
        )}
      >
        <div className="text-gray-200">
          <Markdown>{message.content}</Markdown>
        </div>
      </div>
    </div>
  );
});

interface ContactChatProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  className?: string;
}

export function ContactChat({
  placeholder = "input",
  className,
}: ContactChatProps) {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Use scrollIntoView for better performance and smoother scrolling
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bubbleSoundUrl = "/audio/sfx.mp3";
  const playSound = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        setIsPlaying(true);
        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat-google",
    onFinish: async () => {
      setIsButtonVisible(false);
      await playSound();
      setIsPlaying(false);
    },
    initialMessages: [
      {
        id: "initial-message",
        role: "assistant",
        content:
          "Hello, would you prefer to contact me by email or through Twitter?",
      },
    ],
  });

  // Scroll to bottom when messages change
  useEffect(() => {
    // Use requestAnimationFrame to batch scroll operations and prevent layout thrashing
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [messages]);

  return (
    <div className={cn("w-full mx-auto max-w-2xl", className)}>
      <div className="flex flex-col h-[400px] backdrop-blur-md border border-white/10 border-opacity-10 rounded-xl bg-opacity-50 p-4">
        <div
          className="flex-1 overflow-y-auto mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]"
          ref={chatContainerRef}
        >
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <MessageItem key={message.id || index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-white/10 rounded-xl bg-white/5 p-4 relative"
        >
          <div className="flex items-start relative">
            <textarea
              value={input}
              onChange={(e) => {
                handleInputChange(e);
                setIsButtonVisible(e.target.value.trim().length > 0);
              }}
              placeholder={placeholder}
              rows={2}
              className="w-full bg-transparent border-none outline-none text-white placeholder-gray-500 pr-12 resize-none overflow-hidden"
              style={{ minHeight: "24px" }}
              autoComplete="off"
            />
            <button
              type="submit"
              aria-label="Submit"
              className={cn(
                "absolute right-0 bg-orange-500 hover:bg-orange-600 rounded text-white p-2 transition-all duration-300 transform",
                isButtonVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              )}
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex gap-3 mt-3 text-gray-500 items-center">
            <Link
              href="https://twitter.com/twekaone"
              target="_blank"
              className="p-2 hover:bg-white/5 transition-colors"
            >
              <Image
                src="/images/x-logo.png"
                alt="Twitter"
                width={15}
                height={15}
              />
            </Link>
            <Link
              href="mailto:ekaone3033@gmail.com"
              className="p-2 hover:bg-white/5 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </form>
      </div>
      <audio ref={audioRef} src={bubbleSoundUrl} preload="none"></audio>
    </div>
  );
}
