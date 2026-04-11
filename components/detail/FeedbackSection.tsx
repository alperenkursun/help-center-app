"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import clsx from "clsx";

export default function FeedbackSection() {
  const [likes, setLikes] = useState(4);
  const [dislikes, setDislikes] = useState(4);
  const [userVote, setUserVote] = useState<"yes" | "no" | null>(null);

  const handleVote = (type: "yes" | "no") => {
    if (userVote) return;

    if (type === "yes") {
      setLikes(prev => prev + 1);
      setUserVote("yes");
    } else {
      setDislikes(prev => prev + 1);
      setUserVote("no");
    }
  };

  return (
    <div className="w-full h-auto bg-[#262627] rounded-xl border border-white/5 py-5 mb-4 transition-all duration-300">
      
      <h3 className="text-[18px] leading-10 font-semibold text-white text-center">
        {userVote ? "Geri Bildiriminiz İçin Teşekkürler!" : "Bu İçeriği Faydalı Buldunuz mu?"}
      </h3>
      
      <p className="text-[15px] leading-6 font-medium text-text-secondary text-center mb-6">
        {userVote 
          ? "Fikriniz hizmetlerimizi geliştirmemize yardımcı olacak." 
          : "Lorem ipsum color Lorem ipsum color Lorem ipsum color"}
      </p>

      <div className="flex justify-center gap-2.5">
        
        <button 
          onClick={() => handleVote("yes")}
          disabled={userVote !== null}
          className={clsx(
            "flex items-center justify-center gap-2.5 w-32.5 h-11.25 rounded-lg border focus:outline-none transition-all",
            userVote === "yes" 
              ? "border-[#00D02A] bg-[#00D02A] cursor-default"
              : userVote === "no"
                ? "border-[#00D02A]/50 bg-transparent opacity-50 cursor-not-allowed"
                : "border-[#00D02A] bg-[#00D02A0D] hover:bg-[#00D02A1A] cursor-pointer"
          )}
        >
          <ThumbsUp 
            className="w-4 h-4" 
            color={userVote === "yes" ? "white" : "#00D02A"}
            fill={userVote === "yes" ? "white" : "#00D02A"} 
          />
          <span 
            className={clsx(
              "font-medium text-[14px] leading-6 tracking-[-0.084px]",
              userVote === "yes" ? "text-white" : "text-[#00D02A]"
            )}
          >
            Evet ({likes})
          </span>
        </button>

        <button 
          onClick={() => handleVote("no")}
          disabled={userVote !== null}
          className={clsx(
            "flex items-center justify-center gap-2.5 w-32.5 h-11.25 rounded-lg border focus:outline-none transition-all",
            userVote === "no" 
              ? "border-[#FF0000] bg-[#FF0000] cursor-default"
              : userVote === "yes"
                ? "border-[#FF0000]/50 bg-transparent opacity-50 cursor-not-allowed"
                : "border-[#FF0000] bg-[#FF00000D] hover:bg-[#FF00001A] cursor-pointer"
          )}
        >
          <ThumbsDown 
            className="w-4 h-4" 
            color={userVote === "no" ? "white" : "#FF0000"}
            fill={userVote === "no" ? "white" : "#FF0000"} 
          />
          <span 
            className={clsx(
              "font-medium text-[14px] leading-6 tracking-[-0.084px]",
              userVote === "no" ? "text-white" : "text-[#FF0000]"
            )}
          >
            Hayır ({dislikes})
          </span>
        </button>

      </div>
    </div>
  );
}