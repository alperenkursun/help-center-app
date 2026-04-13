import { ChevronLeft } from "lucide-react";

interface MobileBackButtonProps {
  onClick: () => void;
}

export default function MobileBackButton({ onClick }: MobileBackButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center w-12.5 h-10.5 bg-[#2D2D2F] border border-white/10 rounded-lg hover:bg-[#353537] transition-colors cursor-pointer focus:outline-none"
    >
      <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
    </button>
  );
}