import Image from "next/image";
import BackButton from "./BackButton";
import FeedbackSection from "./FeedbackSection";

export default function ArticleDetail() {
  return (
    <div className="flex-1 pl-5 overflow-y-auto custom-scrollbar">
      <div className="mb-10">
        <BackButton />
      </div>

      <div className="w-full h-auto bg-[#262627] rounded-xl border border-white/5 py-7.5 px-5 flex flex-col gap-10 mb-10">
        
        <div className="flex flex-col gap-5">
          <h2 className="text-[22px] leading-6 font-semibold text-white max-w-125">
            Manuel ve Stoktan Otomatik Teslimat Nedir?
          </h2>
          <p className="text-[14px] leading-6 font-medium text-text-secondary">
            itemAVM stoktan otomatik teslimatı tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat sağlama seçenekleri sağlanır. Alıcı tarafından onaylanmasa da sipariş 24 saat içerisinde sistemimizde tamamlandı ibaresiyle yer alır. Manuel teslimatlar içinse siparişi ‘Satıcı’ tarafın başlatması ve tamamlandıktan sonra ‘tamamlandı’ seçeneğini işaretlemesi gereklidir. itemAVM platformu üzerinden ilan açarken manuel ve stoktan otomatik teslimat seçeneklerinden birini tercih ederek siparişlerin nasıl iletileceğini satıcı olarak belirleyebilirsiniz.
          </p>
        </div>

        <div className="w-full h-95.25 relative rounded-lg overflow-hidden">
          <Image
            src="/images/article.png" 
            alt="Article Image" 
            fill 
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[22px] leading-6 font-semibold text-white max-w-125">
            Manuel ve Stoktan Otomatik Teslimat Nedir?
          </h2>
          <p className="text-[14px] leading-6 font-medium text-text-secondary">
            itemAVM stoktan otomatik teslimatı tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat sağlama seçenekleri sağlanır. Alıcı tarafından onaylanmasa da sipariş 24 saat içerisinde sistemimizde tamamlandı ibaresiyle yer alır. Manuel teslimatlar içinse siparişi ‘Satıcı’ tarafın başlatması ve tamamlandıktan sonra ‘tamamlandı’ seçeneğini işaretlemesi gereklidir. itemAVM platformu üzerinden ilan açarken manuel ve stoktan otomatik teslimat seçeneklerinden birini tercih ederek siparişlerin nasıl iletileceğini satıcı olarak belirleyebilirsiniz.
          </p>
        </div>

      </div>

      <FeedbackSection />
      
    </div>
  );
}