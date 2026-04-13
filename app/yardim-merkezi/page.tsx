"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/home/MainContent";
import ArticleDetail from "@/components/detail/ArticleDetail";
import MobileCategoryButton from "@/components/ui/MobileCategoryButton";
import data from "@/data/helpCenter.json";
import { Category, Article } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (val: string) => {
    setIsLoading(true);
    setSearchQuery(val);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSlug(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data.categories;

    return data.categories
      .map((cat) => ({
        ...cat,
        articles: cat.articles.filter((art) =>
          art.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((cat) => cat.articles.length > 0);
  }, [searchQuery]);

  const activeArticle = useMemo(() => {
    if (!activeSlug) return null;
    for (const cat of data.categories) {
      const found = cat.articles.find((art) => art.slug === activeSlug);
      if (found) return found;
    }
    return null;
  }, [activeSlug]);

  const navigateToArticle = (slug: string) => {
    window.location.hash = slug;
  };

  const navigateHome = () => {
    window.location.hash = "";
  };

  return (
    <main className="min-h-screen bg-bg-outer py-4.75 lg:py-13.25 px-4">
      <div className="max-w-373.5 mx-auto w-full lg:bg-bg-inner rounded-lg lg:border lg:border-border-dark lg:shadow-2xl overflow-hidden">
        <Header />
       
        <div className="flex flex-col lg:flex-row min-h-200 lg:p-5">
          <Sidebar 
            categories={filteredData as Category[]} 
            activeSlug={activeSlug}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onArticleClick={navigateToArticle}
            isMobileOpen={isModalOpen}
            onMobileClose={() => setIsModalOpen(false)}
          />

          <MobileCategoryButton 
            onClick={() => setIsModalOpen(true)} 
            isOpen={isModalOpen}
          />

          <div className="flex-1 contents" key={activeSlug || 'home'}>
            {activeArticle ? (
              <ArticleDetail 
                article={activeArticle as Article} 
                onBack={navigateHome} 
              />
            ) : (
              <MainContent 
                categories={filteredData as Category[]} 
                onArticleClick={navigateToArticle}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}