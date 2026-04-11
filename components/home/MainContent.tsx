import WelcomeHero from "./WelcomeHero";
import SupportButton from "./SupportButton";
import ArticleCard from "./ArticleCard";
import SkeletonCard from "../ui/SkeletonCard";
import { Category } from "@/types";

interface MainContentProps {
  categories: Category[];
  onArticleClick: (slug: string) => void;
  isLoading: boolean;
}

export default function MainContent({ categories, onArticleClick, isLoading }: MainContentProps) {
  const allArticles = categories.flatMap(cat => cat.articles);

  return (
    <section className="flex-1 pl-5 py-10 overflow-y-auto custom-scrollbar animate-page-entry">
      <div className="flex flex-col items-center text-center">
        <WelcomeHero />
        <SupportButton />

        <div className="grid grid-cols-3 gap-3.75 w-full text-left">
          {isLoading ? (
            [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
          ) : (
            allArticles.map((article) => (
              <div 
                key={article.id} 
                onClick={() => onArticleClick(article.slug)}
                className="transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <ArticleCard {...article} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}