"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import CategoryCollapse from "./CategoryCollapse";
import data from "@/data/helpCenter.json";
import { Radio, ShieldCheck, PlayCircle, XCircle } from "lucide-react";

const getCategoryIcon = (iconName: string, iconColor: string) => {
  const className = `w-5 h-5 shrink-0 ${iconColor}`;
  
  switch (iconName) {
    case "radio":
      return <Radio className={className} />;
    case "shield-check":
      return <ShieldCheck className={className} />;
    case "play-circle":
      return <PlayCircle className={className} />;
    case "x-circle":
      return <XCircle className={className} />;
    default:
      return <PlayCircle className={className} />;
  }
};

export default function Sidebar() {
  const [openCategoryId, setOpenCategoryId] = useState<string>("");
  const [activeArticleId, setActiveArticleId] = useState<string>(data.categories[0].articles[0].id);

  const handleToggleCategory = (categoryId: string) => {
    setOpenCategoryId((prevId) => (prevId === categoryId ? "" : categoryId));
  };

  return (
    <aside className="w-100 pr-5 border-r border-border-dark shrink-0 flex flex-col">
      
      <div className="mb-5">
        <SearchInput />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
        {data.categories.map((category) => (
          <CategoryCollapse
            key={category.id}
            title={category.title}
            icon={getCategoryIcon(category.icon, category.iconColor)}
            articles={category.articles}
            isOpen={openCategoryId === category.id}
            onToggle={() => handleToggleCategory(category.id)}
            activeArticleId={activeArticleId}
            onArticleClick={(articleId) => setActiveArticleId(articleId)}
          />
        ))}
      </div>
      
    </aside>
  );
}