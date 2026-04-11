import Image from "next/image";
import FeedbackSection from "./FeedbackSection";
import BackButton from "./BackButton";
import { Article } from "@/types";

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export default function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  return (
    <div className="flex-1 pl-5 overflow-y-auto custom-scrollbar">
      <div className="mb-10 cursor-pointer w-fit" onClick={onBack}>
        <BackButton />
      </div>

      <div className="w-full h-auto bg-[#262627] rounded-xl border border-white/5 py-7.5 px-5 flex flex-col gap-10 mb-10">
        
        <div className="flex flex-col gap-5 text-left">
          <h2 className="text-[22px] leading-6 font-semibold text-white max-w-125">
            {article.title}
          </h2>
          <p className="text-[14px] leading-6 font-medium text-text-secondary">
            {article.content}
          </p>
        </div>

        <div className="w-full h-95.25 relative rounded-lg overflow-hidden">
          <Image
            src={article.iconSrc || "/images/article.png"} 
            alt={article.title} 
            fill 
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-left">
          <h2 className="text-[22px] leading-6 font-semibold text-white max-w-125">
            {article.title} Hakkında Detaylar
          </h2>
          <p className="text-[14px] leading-6 font-medium text-text-secondary">
            {article.content}
          </p>
        </div>

      </div>

      <FeedbackSection />
    </div>
  );
}