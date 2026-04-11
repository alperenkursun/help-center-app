import { Headphones } from "lucide-react";

export default function SupportButton() {
  return (
    <button className="flex items-center justify-center gap-2.5 w-65 h-14 bg-brand-blue hover:bg-blue-600 transition-colors rounded-lg cursor-pointer mb-7.5 focus:outline-none">
      <div className="flex items-center justify-center shrink-0">
        <Headphones className="w-4.25 h-4.25 text-white" strokeWidth={2} />
      </div>
      <span className="font-medium text-[16px] leading-none text-white">
        Canlı Desteğe Bağlan
      </span>
    </button>
  );
}