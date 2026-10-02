import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { img, alt } from "@/data/images";
import type { Article } from "@/data/types";
import type { Destination } from "@/data/destinations";
import { formatDate, articlesInCategory, type CategoryInfo } from "@/data/articles";

export function ArticleCard({ article, eager = false }: { article: Article; eager?: boolean }) {
  return (
    <article className="group flex flex-col">
      <Link to="/articles/$slug" params={{ slug: article.slug }} className="block overflow-hidden rounded-2xl" tabIndex={-1} aria-hidden>
        <img src={img[article.image]} alt={alt[article.image]} loading={eager ? "eager" : "lazy"} width={1200} height={800} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <span className="eyebrow">{article.category}</span>
        <h3 className="mt-2 text-xl font-semibold leading-snug md:text-2xl">
          <Link to="/articles/$slug" params={{ slug: article.slug }} className="transition-colors group-hover:text-primary">{article.title}</Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-muted-foreground">{article.excerpt}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-3"><time dateTime={article.date}>{formatDate(article.date)}</time><span aria-hidden>·</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.readingTime} min read</span></span>
          <Link to="/articles/$slug" params={{ slug: article.slug }} className="inline-flex items-center gap-1 font-semibold text-primary" aria-label={`Read article: ${article.title}`}>Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>
    </article>
  );
}

export function DestinationCard({ d }: { d: Destination }) {
  const inner = (
    <>
      <img src={img[d.image]} alt={alt[d.image]} loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="card-overlay absolute inset-0" />
      <div className="relative mt-auto p-6 text-ink-foreground">
        <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-foreground/80"><MapPin className="h-3.5 w-3.5" />{d.region}</p>
        <h3 className="mt-1 text-3xl font-semibold">{d.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-foreground/85">{d.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
      </div>
    </>
  );
  const cls = "group relative flex aspect-[4/5] flex-col overflow-hidden rounded-2xl shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift";
  return d.article ? (
    <Link to="/articles/$slug" params={{ slug: d.article }} className={cls} aria-label={`Explore ${d.name}`}>{inner}</Link>
  ) : (
    <Link to="/articles" search={{ q: undefined, category: "International" }} className={cls} aria-label={`Explore ${d.name}: international stories`}>{inner}</Link>
  );
}

export function CategoryCard({ c, variant = "default" }: { c: CategoryInfo; variant?: "default" | "large" }) {
  const count = articlesInCategory(c.name).length;
  return (
    <Link to="/articles" search={{ category: c.name }} className="group flex items-center gap-4 rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
      <img src={img[c.image]} alt={alt[c.image]} loading="lazy" width={160} height={160} className={`${variant === "large" ? "h-24 w-24" : "h-16 w-16"} shrink-0 rounded-xl object-cover`} />
      <div className="min-w-0">
        <h3 className="text-lg font-semibold group-hover:text-primary">{c.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
        {variant === "large" && (
          <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary">{count} {count === 1 ? "article" : "articles"} · View Articles <ArrowRight className="h-4 w-4" /></p>
        )}
      </div>
    </Link>
  );
}
