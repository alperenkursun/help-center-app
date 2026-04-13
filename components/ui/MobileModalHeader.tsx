import { LayoutGrid, X } from "lucide-react";

interface MobileModalHeaderProps {
  onClose: () => void;
}

export default function MobileModalHeader({ onClose }: MobileModalHeaderProps) {
  return (
    <div className="sticky top-0 flex lg:hidden items-center justify-center pt-6.5 pb-6.5 bg-bg-inner rounded-t-xl mb-6.5">
      <div className="flex items-center gap-2.5">
        <LayoutGrid className="w-7 h-7 text-emerald-400" />
        <span className="font-semibold text-[18px] leading-6 tracking-[-0.108px] text-white">
          Kategoriler
        </span>
      </div>

      <button 
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center focus:outline-none cursor-pointer"
      >
        <X className="w-7 h-7 text-white" strokeWidth={2} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5"></div>
    </div>
  );
}