import Image from "next/image";

export default function Hero() {
  return (
    <div className="mb-30 max-w-3xl">
      {/* Centered Logo */}
      <div className="flex justify-center mb-20">
        <div
          className="rounded-full overflow-hidden bg-opacity-20 shadow-lg"
          style={{ width: 50, height: 50 }}
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      {/* Glassmorphism Card */}
      <div className="mt-8 flex justify-center items-center h-[200px]">
        <div className="backdrop-blur-md border border-white/10 border-opacity-10 rounded-xl bg-opacity-50 p-8 flex items-center justify-center w-full h-full">
          <span className="text-amber-50 text-2xl text-center radio-canada">
            I constantly seek out new challenges and embrace the ever-evolving
            tech landscape. Experimenting with the latest web technologies
          </span>
        </div>
      </div>
    </div>
  );
}
