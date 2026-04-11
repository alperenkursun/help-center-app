import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  return (
    <button className="flex items-center w-31.75 h-10.5 bg-[#2D2D2F] border border-white/10 rounded-lg px-4 gap-1.5 hover:bg-[#353537] transition-colors cursor-pointer focus:outline-none">
      <ChevronLeft className="w-4 h-4 text-white" strokeWidth={2.5} />
      <span className="text-white font-semibold text-[14px] leading-none">
        Geri Dön
      </span>
    </button>
  );
}