import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { z } from "zod";
import { articlesInCategory } from "@/data/articles";
import { categoryNames } from "@/data/types";
import { ArticleCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/Sections";
import { chip, input } from "@/components/site/styles";

const searchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
});

export const Route = createFileRoute("/articles/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Travel Stories & Guides | WanderVista" },
      { name: "description", content: "Browse every WanderVista travel guide. Search and filter stories on India, international trips, adventure, beaches and travel tips." },
      { property: "og:title", content: "Travel Stories & Guides | WanderVista" },
      { property: "og:description", content: "Search and filter destination guides and practical travel tips." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const { q = "", category = "All" } = Route.useSearch();
  const navigate = useNavigate({ from: "/articles/" });
  const valid = (categoryNames as readonly string[]).includes(category) ? category : "All";
  const term = q.toLowerCase().trim();
  const list = articlesInCategory(valid as never).filter((a) =>
    !term || [a.title, a.excerpt, a.category].some((s) => s.toLowerCase().includes(term)),
  );
  const set = (p: { q?: string; category?: string }) =>
    navigate({ search: (s) => ({ ...s, ...p }), replace: true });

  return (
    <>
      <PageHeader eyebrow="All Articles" title="Travel Stories" intro="Destination guides, practical advice and inspiration for your next journey." crumbs={[{ label: "Articles" }]} />
      <section className="container-wide">
        <div className="relative max-w-xl">
          <label htmlFor="article-search" className="sr-only">Search articles</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input id="article-search" value={q} onChange={(e) => set({ q: e.target.value || undefined })} placeholder="Search titles, excerpts or categories" className={`${input} pl-12`} />
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...categoryNames].map((c) => (
            <button key={c} onClick={() => set({ category: c === "All" ? undefined : c })} aria-pressed={valid === c} className={chip(valid === c)}>{c}</button>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">{list.length} {list.length === 1 ? "article" : "articles"} found</p>
        {list.length ? (
          <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        ) : (
          <p className="mt-12 rounded-2xl bg-muted p-10 text-center text-lg">No articles found. Try another search or category.</p>
        )}
      </section>
    </>
  );
}
