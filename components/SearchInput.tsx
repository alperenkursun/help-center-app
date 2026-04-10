import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative flex items-center w-full h-14 bg-card-bg border border-border-dark rounded-lg px-4 gap-3 focus-within:border-white/20 transition-all">
      <Search className="w-5 h-5 text-white shrink-0" strokeWidth={1.5} />
      <input
        type="text"
        placeholder="Ara.."
        className="bg-transparent border-none outline-none flex-1 text-[15px] leading-none text-white placeholder:text-text-secondary font-normal"
      />
    </div>
  );
}