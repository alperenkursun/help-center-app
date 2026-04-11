import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import ArticleDetail from "@/components/ArticleDetail";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-outer py-13.25 px-4">
      <div className="max-w-373.5 mx-auto w-full bg-bg-inner rounded-lg border border-border-dark shadow-2xl overflow-hidden">
        
        <Header />

        <div className="flex p-5">
          <Sidebar />
          {/* <MainContent /> */}
          <ArticleDetail />
        </div>
        
      </div>
    </main>
  );
}