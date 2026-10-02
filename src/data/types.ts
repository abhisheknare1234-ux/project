import type { ImageKey } from "./images";

export const categoryNames = [
  "India", "International", "Adventure", "Beaches", "Culture & Heritage", "Budget Travel", "Food & Travel", "Travel Tips",
] as const;
export type CategoryName = (typeof categoryNames)[number];

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  tip?: string;
  image?: ImageKey;
}

export interface Article {
  slug: string;
  title: string;
  category: CategoryName;
  excerpt: string;
  author: string;
  date: string; // ISO
  readingTime: number;
  image: ImageKey;
  tags: string[];
  featured?: boolean;
  intro: string;
  sections: ArticleSection[];
  conclusion: string;
}
