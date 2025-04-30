export default function NeonText() {
  return (
    <div className="flex flex-col items-center mt-[4rem]">
      <span
        className="mt-[-2rem] text-2xl md:text-3xl radio-canada"
        style={{
          color: "#3cf6ff",
          textShadow:
            "0 0 6px #3cf6ff, 0 0 12px #3cf6ff, 0 0 24px #3cf6ff, 0 0 48px #3cf6ff",
        }}
      >
        Radio
      </span>
    </div>
  );
}
