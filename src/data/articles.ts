import { articlesA } from "./articles-a";
import { articlesB } from "./articles-b";
import { articlesC } from "./articles-c";
import type { Article, CategoryName } from "./types";
import type { ImageKey } from "./images";

export const articles: Article[] = [...articlesA, ...articlesB, ...articlesC].sort(
  (a, b) => b.date.localeCompare(a.date),
);

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const featuredArticles = articles.filter((a) => a.featured).slice(0, 6);
export const popularArticles = [
  "top-10-places-to-visit-in-india",
  "goa-travel-guide",
  "practical-travel-tips",
  "paris-travel-guide",
].map((s) => getArticle(s)!);

export function relatedArticles(article: Article, n = 3) {
  const same = articles.filter((a) => a.slug !== article.slug && a.category === article.category);
  const others = articles.filter((a) => a.slug !== article.slug && a.category !== article.category);
  return [...same, ...others].slice(0, n);
}

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export interface CategoryInfo {
  name: CategoryName;
  description: string;
  image: ImageKey;
}

export const categories: CategoryInfo[] = [
  { name: "India", description: "Explore India's diverse destinations, cultures and landscapes.", image: "jaipur" },
  { name: "International", description: "Discover unforgettable places around the world.", image: "paris" },
  { name: "Adventure", description: "Trekking, camping, road trips and thrilling experiences.", image: "trekking" },
  { name: "Beaches", description: "Relax at beautiful coastal destinations.", image: "goa" },
  { name: "Culture & Heritage", description: "Discover history, architecture, traditions and local culture.", image: "udaipur" },
  { name: "Budget Travel", description: "Practical ideas for travelling without overspending.", image: "rishikesh" },
  { name: "Food & Travel", description: "Discover local cuisine and food experiences.", image: "kerala" },
  { name: "Travel Tips", description: "Useful advice for planning safer and smarter journeys.", image: "packing" },
];

/** Articles in a category; Food & Travel collects food-rich guides as there is no dedicated article. */
const foodSlugs = ["goa-travel-guide", "kerala-travel-guide", "jaipur-heritage-guide", "best-places-southeast-asia", "paris-travel-guide"];
export function articlesInCategory(name: CategoryName | "All") {
  if (name === "All") return articles;
  if (name === "Food & Travel") return articles.filter((a) => foodSlugs.includes(a.slug));
  return articles.filter((a) => a.category === name);
}
