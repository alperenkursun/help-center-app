import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function FeedbackSection() {
  return (
    <div className="w-full h-auto bg-[#262627] rounded-xl border border-white/5 py-5 mb-4">
      <h3 className="text-[18px] leading-10 font-semibold text-white text-center">
        Bu İçeriği Faydalı Buldunuz mu?
      </h3>
      <p className="text-[15px] leading-6 font-medium text-text-secondary text-center mb-6">
        Lorem ipsum color Lorem ipsum color Lorem ipsum color
      </p>
      <div className="flex justify-center gap-2.5">
        <button className="flex items-center justify-center gap-2.5 w-32.5 h-11.25 rounded-lg border border-[#00D02A] bg-[#00D02A0D] hover:bg-[#00D02A1A] transition-all cursor-pointer focus:outline-none">
          <ThumbsUp className="w-4 h-4 text-[#00D02A]" fill="#00D02A" />
          <span className="text-[#00D02A] font-medium text-[14px] leading-6 tracking-[-0.084px]">
            Evet (4)
          </span>
        </button>

        <button className="flex items-center justify-center gap-2.5 w-32.5 h-11.25 rounded-lg border border-[#FF0000] bg-[#FF00000D] hover:bg-[#FF00001A] transition-all cursor-pointer focus:outline-none">
          <ThumbsDown className="w-4 h-4 text-[#FF0000]" fill="#FF0000" />
          <span className="text-[#FF0000] font-medium text-[14px] leading-6 tracking-[-0.084px]">
            Hayır (4)
          </span>
        </button>
      </div>
    </div>
  );
}