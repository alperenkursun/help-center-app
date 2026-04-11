"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/home/MainContent";
import ArticleDetail from "@/components/detail/ArticleDetail";
import data from "@/data/helpCenter.json";
import { Category, Article } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState<string>("");

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
    <main className="min-h-screen bg-bg-outer py-13.25 px-4">
      <div className="max-w-373.5 mx-auto w-full bg-bg-inner rounded-lg border border-border-dark shadow-2xl overflow-hidden">
        <Header />

        <div className="flex min-h-200 p-5">
          <Sidebar 
            categories={filteredData as Category[]} 
            activeSlug={activeSlug}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onArticleClick={navigateToArticle}
          />

          {activeArticle ? (
            <ArticleDetail 
              article={activeArticle as Article} 
              onBack={navigateHome} 
            />
          ) : (
            <MainContent 
              categories={filteredData as Category[]} 
              onArticleClick={navigateToArticle}
            />
          )}
        </div>
      </div>
    </main>
  );
}