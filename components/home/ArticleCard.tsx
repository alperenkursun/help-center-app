import Image from "next/image";
import { Eye, ThumbsUp, ThumbsDown } from "lucide-react";

export interface ArticleCardProps {
  title: string;
  summary: string;
  views: string | number;
  likes: string | number;
  dislikes: string | number;
  iconSrc: string;
}

export default function ArticleCard({
  title,
  summary,
  views,
  likes,
  dislikes,
  iconSrc,
}: ArticleCardProps) {
  return (
    <button className="flex flex-col items-center text-center w-full bg-card-bg border-[0.95px] border-white/10 rounded-[7.63px] p-[19.08px] gap-[19.08px] cursor-pointer hover:border-white/20 hover:bg-white/20 transition-all focus:outline-none group">
      
      <div className="w-[57.23px] h-[57.23px] shrink-0">
        <Image
          src={iconSrc}
          alt={title}
          width={57}
          height={57}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-[19.08px] leading-[28.61px] font-semibold text-white">
          {title}
        </h3>
        <p className="text-[13.35px] leading-[22.89px] font-medium text-text-secondary line-clamp-3">
          {summary}
        </p>
      </div>

      <div className="flex items-center h-[30.52px] rounded-[98.24px] bg-white/10 p-[6.68px] gap-3 mt-auto">
        
        <div className="flex items-center gap-[4.77px]">
          <Eye className="w-[14.31px] h-[11.45px] text-white/60" strokeWidth={2} />
          <span className="text-[13.35px] font-medium text-text-secondary">
            {views}
          </span>
        </div>

        <div className="flex items-center gap-[4.77px]">
          <ThumbsUp className="w-3.5 h-3.5 text-white/60" strokeWidth={2} />
          <span className="text-[13.35px] font-medium text-text-secondary">
            {likes}
          </span>
        </div>

        <div className="flex items-center gap-[4.77px]">
          <ThumbsDown className="w-3.5 h-3.5 text-white/60" strokeWidth={2} />
          <span className="text-[13.35px] font-medium text-text-secondary">
            {dislikes}
          </span>
        </div>

      </div>
      
    </button>
  );
}