import { ChevronDown, LayoutGrid } from "lucide-react";
import clsx from "clsx";

interface MobileCategoryButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function MobileCategoryButton({ onClick, isOpen }: MobileCategoryButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex lg:hidden items-center justify-between w-full h-15.5 bg-bg-inner border border-white/5 rounded-lg px-4 focus:outline-none cursor-pointer mb-5"
    >
      <div className="flex items-center gap-2.5">
        <LayoutGrid className="w-6 h-6 text-emerald-400" />
        <span className="font-semibold text-[18px] leading-6 tracking-[-0.108px] text-white">
          Tüm Kategoriler
        </span>
      </div>

      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
        <ChevronDown 
          className={clsx(
            "w-5 h-5 text-text-secondary transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )} 
          strokeWidth={2} 
        />
      </div>
    </button>
  );
}