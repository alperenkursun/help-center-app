"use client";
import { useState } from "react";
import SearchInput from "../ui/SearchInput";
import { Radio, ShieldCheck, PlayCircle, XCircle } from "lucide-react";
import CategoryCollapse from "../ui/CategoryCollapse";
import { Category } from "@/types";

interface SidebarProps {
  categories: Category[];
  activeSlug: string;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  onArticleClick: (slug: string) => void;
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

export default function Sidebar({ categories, activeSlug, searchQuery, onSearchChange, onArticleClick }: SidebarProps) {
  const [openCategoryId, setOpenCategoryId] = useState<string>("");

  return (
    <aside className="w-100 pr-5 border-r border-border-dark shrink-0 flex flex-col">
      <div className="mb-5">
        <SearchInput 
          value={searchQuery} 
          onChange={(e) => onSearchChange(e.target.value)} 
        />
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
        {categories.map((category) => (
          <CategoryCollapse
            key={category.id}
            title={category.title}
            icon={getCategoryIcon(category.icon, category.iconColor)}
            articles={category.articles}
            isOpen={openCategoryId === category.id}
            onToggle={() => setOpenCategoryId(openCategoryId === category.id ? "" : category.id)}
            activeArticleId={category.articles.find(a => a.slug === activeSlug)?.id}
            onArticleClick={(id) => {
              const art = category.articles.find(a => a.id === id);
              if (art) onArticleClick(art.slug);
            }}
          />
        ))}
      </div>
    </aside>
  );
}