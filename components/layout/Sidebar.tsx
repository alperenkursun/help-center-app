"use client";
import { useState } from "react";
import SearchInput from "../ui/SearchInput";
import { Radio, ShieldCheck, PlayCircle, XCircle } from "lucide-react";
import CategoryCollapse from "../ui/CategoryCollapse";
import MobileModalHeader from "../ui/MobileModalHeader";
import { Category } from "@/types";

interface SidebarProps {
  categories: Category[];
  activeSlug: string;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  onArticleClick: (slug: string) => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const getCategoryIcon = (iconName: string, iconColor: string) => {
  const className = `w-5 h-5 shrink-0 ${iconColor}`;
  switch (iconName) {
    case "radio": return <Radio className={className} />;
    case "shield-check": return <ShieldCheck className={className} />;
    case "play-circle": return <PlayCircle className={className} />;
    case "x-circle": return <XCircle className={className} />;
    default: return <PlayCircle className={className} />;
  }
};

export default function Sidebar({ 
  categories, 
  activeSlug, 
  searchQuery, 
  onSearchChange, 
  onArticleClick,
  isMobileOpen,
  onMobileClose
}: SidebarProps) {
  const [manualOpenId, setManualOpenId] = useState<string>("");

  return (
    <aside className="w-full lg:w-100 lg:pr-5 lg:border-r lg:border-border-dark shrink-0 flex flex-col">
      
      <div className="mb-5">
        <SearchInput 
          value={searchQuery} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)} 
        />
      </div>

      <div className={`${isMobileOpen ? 'fixed' : 'hidden'} lg:relative lg:block bottom-0 left-0 z-9999 h-[80vh] p-5 pt-0 lg:p-0 rounded-tr-[20px] rounded-tl-[20px] lg:rounded-tr-none lg:rounded-tl-none lg:h-auto w-full bg-bg-inner flex-1 overflow-y-auto space-y-4 custom-scrollbar animate-page-entry`}>
        
        <MobileModalHeader onClose={onMobileClose} />

        {categories.map((category) => {
          let isCategoryOpen = false;

          if (searchQuery.length > 0) {
            isCategoryOpen = true;
          } else if (manualOpenId) {
            isCategoryOpen = manualOpenId === category.id;
          } else {
            isCategoryOpen = category.articles.some(art => art.slug === activeSlug);
          }

          return (
            <CategoryCollapse
              key={category.id}
              title={category.title}
              icon={getCategoryIcon(category.icon, category.iconColor)}
              articles={category.articles}
              isOpen={isCategoryOpen}
              onToggle={() => setManualOpenId(manualOpenId === category.id ? "CLOSED_BY_USER" : category.id)}
              activeArticleId={category.articles.find(a => a.slug === activeSlug)?.id}
              onArticleClick={(id) => {
                const art = category.articles.find(a => a.id === id);
                if (art) {
                  onArticleClick(art.slug);
                  onMobileClose();
                }
              }}
            />
          );
        })}
      </div>
    </aside>
  );
}