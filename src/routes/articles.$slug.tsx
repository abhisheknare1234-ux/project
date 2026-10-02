import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Lightbulb } from "lucide-react";
import { getArticle, popularArticles, relatedArticles, formatDate, slugify } from "@/data/articles";
import { img, alt } from "@/data/images";
import { ArticleCard } from "@/components/site/Cards";
import { Breadcrumbs } from "@/components/site/Sections";
import { btn } from "@/components/site/styles";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found | WanderVista" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} | WanderVista` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="container-wide py-24 text-center">
      <h1 className="text-4xl font-semibold">Lost Your Way?</h1>
      <p className="mt-4 text-muted-foreground">We couldn't find that article.</p>
      <Link to="/articles" className={`${btn.primary} mt-8`}>Back to Articles</Link>
    </div>
  );
}

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const related = relatedArticles(a);
  return (
    <article>
      <header className="relative flex min-h-[60vh] items-end overflow-hidden">
        <img src={img[a.image]} alt={alt[a.image]} width={1200} height={800} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-wide relative pb-12 pt-32 text-ink-foreground">
          <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">{a.category}</span>
          <h1 className="fade-up mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{a.title}</h1>
          <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink-foreground/85">
            <span>By {a.author}</span><span aria-hidden>·</span><time dateTime={a.date}>{formatDate(a.date)}</time><span aria-hidden>·</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{a.readingTime} min read</span>
          </p>
        </div>
      </header>

      <div className="container-wide mt-10">
        <Breadcrumbs items={[{ label: "Articles", to: "/articles" }, { label: a.title }]} />
      </div>

      <div className="container-wide mt-10 grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="prose-article max-w-3xl">
          <p className="text-xl! leading-relaxed! text-muted-foreground!">{a.intro}</p>
          {a.sections.map((s) => (
            <section key={s.heading}>
              <h2 id={slugify(s.heading)}>{s.heading}</h2>
              {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              {s.image && (
                <figure className="my-8">
                  <img src={img[s.image]} alt={alt[s.image]} loading="lazy" width={1200} height={800} className="w-full rounded-2xl object-cover" />
                  <figcaption className="mt-2 text-sm text-muted-foreground">{alt[s.image]}</figcaption>
                </figure>
              )}
              {s.tip && (
                <aside className="my-8 flex gap-4 rounded-2xl border-l-4 border-primary bg-secondary p-6">
                  <Lightbulb className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                  <div><p className="mb-1! font-bold text-primary!">Travel tip</p><p className="mb-0!">{s.tip}</p></div>
                </aside>
              )}
            </section>
          ))}
          <h2 id="conclusion">Conclusion</h2>
          <p>{a.conclusion}</p>
          <Link to="/articles" className={`${btn.outline} mt-6`}><ArrowLeft className="h-4 w-4" />Back to Articles</Link>
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="In this article" className="hidden rounded-2xl border bg-card p-6 lg:block">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">In This Article</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {a.sections.map((s) => <li key={s.heading}><a href={`#${slugify(s.heading)}`} className="text-muted-foreground hover:text-primary">{s.heading}</a></li>)}
            </ul>
          </nav>
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">Popular Articles</h2>
            <ul className="mt-4 space-y-4">
              {popularArticles.map((p) => (
                <li key={p.slug}>
                  <Link to="/articles/$slug" params={{ slug: p.slug }} className="group flex gap-3">
                    <img src={img[p.image]} alt={alt[p.image]} loading="lazy" width={64} height={64} className="h-16 w-16 shrink-0 rounded-lg object-cover" />
                    <span className="text-sm font-semibold leading-snug group-hover:text-primary">{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="container-wide mt-24" aria-labelledby="related">
        <h2 id="related" className="text-3xl font-semibold md:text-4xl">Related Articles</h2>
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => <ArticleCard key={r.slug} article={r} />)}
        </div>
      </section>
    </article>
  );
}
