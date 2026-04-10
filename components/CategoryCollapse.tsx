"use client";

import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import clsx from "clsx";

export interface Article {
  id: string;
  title: string;
}

interface CategoryCollapseProps {
  title: string;
  icon: ReactNode;
  articles: Article[];
  isOpen: boolean;
  onToggle: () => void;
  activeArticleId?: string;
  onArticleClick: (articleId: string) => void;
}

export default function CategoryCollapse({
  title,
  icon,
  articles,
  isOpen,
  onToggle,
  activeArticleId,
  onArticleClick,
}: CategoryCollapseProps) {
  return (
    <div
      className={clsx(
        "border rounded-xl transition-colors duration-300 overflow-hidden",
        isOpen
          ? "border-white/10 bg-bg-inner"
          : "border-white/5 bg-transparent hover:border-white/10"
      )}
    >
        <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 h-15.5 cursor-pointer focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="shrink-0 flex items-center justify-center w-6 h-6">{icon}</div>
          <span className="font-semibold text-[16px] leading-7.5 tracking-[-0.6px] text-white">
            {title}
          </span>
        </div>

        <div className="w-7.5 h-7.5 rounded-[4.61px] bg-white/10 flex items-center justify-center shrink-0">
          <ChevronDown
            className={clsx(
              "w-4 text-text-secondary transition-transform duration-300 ease-in-out",
              isOpen ? "rotate-180" : "rotate-0"
            )}
            strokeWidth={1.54}
          />
        </div>
      </button>

      <div
        className={clsx(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-4 pb-4 space-y-1.75 mt-1">
            {articles.map((article) => {
              const isActive = activeArticleId === article.id;

              return (
                <button
                  key={article.id}
                  onClick={() => onArticleClick(article.id)}
                  className={clsx(
                    "w-full flex items-center text-left h-10 px-2.5 rounded-lg transition-colors duration-200 focus:outline-none min-w-0",
                    isActive
                      ? "bg-[#393939] text-white" 
                      : "text-text-secondary hover:text-white"
                  )}
                >
                  <span className="text-[14px] leading-tight truncate block w-full">
                    {article.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}