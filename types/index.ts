export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  views: string | number;
  likes: number;
  dislikes: number;
  iconSrc: string;
  detailImage?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  articles: Article[];
}