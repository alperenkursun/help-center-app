import WelcomeHero from "./WelcomeHero";
import SupportButton from "./SupportButton";
import ArticleCard from "./ArticleCard";

const MOCK_ARTICLES = [
  {
    id: "1",
    title: "Yayıncı Ekosistemi",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
  {
    id: "2",
    title: "Kapak Fotoğrafı Değiştirme",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
  {
    id: "3",
    title: "Ödeme Yöntemleri",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
  {
    id: "4",
    title: "Sipariş İşlemleri",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
  {
    id: "5",
    title: "İade ve Değişim",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
  {
    id: "6",
    title: "Kargo ve Teslimat",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
  {
    id: "7",
    title: "Fatura Bilgileri",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
  {
    id: "8",
    title: "Güvenlik ve Gizlilik",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
  {
    id: "9",
    title: "Mobil Uygulama",
    summary: "itemAVM stoktan otomatik teslimat tercih etmeniz durumunda, stoklarınız üstünden doğrudan teslimat...",
    views: "10.998",
    likes: 205,
    dislikes: 20,
    iconSrc: "/images/icon.png",
  },
];

export default function MainContent() {
  return (
    <section className="flex-1 pl-5 py-10 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col items-center text-center">
        
        <WelcomeHero />
        <SupportButton />

        <div className="grid grid-cols-3 gap-3.75 w-full text-left">
          {MOCK_ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              summary={article.summary}
              views={article.views}
              likes={article.likes}
              dislikes={article.dislikes}
              iconSrc={article.iconSrc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}