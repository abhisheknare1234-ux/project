import { createFileRoute, Link } from "@tanstack/react-router";
import { Backpack, CalendarCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import { img, alt } from "@/data/images";
import { destinations, featuredDestinationIds } from "@/data/destinations";
import { featuredArticles, categories } from "@/data/articles";
import { ArticleCard, CategoryCard, DestinationCard } from "@/components/site/Cards";
import { NewsletterSection, ResponsibleTravel } from "@/components/site/Sections";
import { btn } from "@/components/site/styles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WanderVista | Travel Guides, Destinations & Travel Tips" },
      { name: "description", content: "Discover beautiful destinations, travel guides, practical tips and inspiring stories with WanderVista. Plan your next journey with confidence." },
      { property: "og:title", content: "WanderVista | Travel Guides, Destinations & Travel Tips" },
      { property: "og:description", content: "Discover beautiful destinations, travel guides, practical tips and inspiring stories." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const tips = [
  { icon: Backpack, t: "Pack Light", p: "Carry only what you genuinely need." },
  { icon: CalendarCheck, t: "Plan Ahead", p: "Research transportation, accommodation and important local information." },
  { icon: HeartHandshake, t: "Respect Local Culture", p: "Learn basic customs and respect local traditions." },
  { icon: ShieldCheck, t: "Keep an Emergency Plan", p: "Keep important documents, emergency contacts and backup payment methods accessible." },
];

function Home() {
  const featured = featuredDestinationIds.map((id) => destinations.find((d) => d.id === id)!);
  return (
    <>
      <section className="relative -mt-16 flex min-h-[92vh] items-end overflow-hidden md:-mt-20">
        <img src={img.hero} alt={alt.hero} width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-wide relative pb-20 pt-40 text-ink-foreground">
          <p className="fade-up text-xs font-bold uppercase tracking-[0.25em] text-accent">Discover Places. Plan Journeys. Create Memories.</p>
          <h1 className="fade-up mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">Discover the World, One Journey at a Time</h1>
          <p className="fade-up mt-6 max-w-xl text-lg text-ink-foreground/85">Explore breathtaking destinations, discover unforgettable experiences, and find practical travel inspiration for your next adventure.</p>
          <div className="fade-up mt-8 flex flex-wrap gap-3">
            <Link to="/destinations" className={btn.accent}>Explore Destinations</Link>
            <Link to="/articles" className={btn.ghostLight}>Read Travel Stories</Link>
          </div>
        </div>
      </section>

      <section className="container-wide mt-24" aria-labelledby="dest-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Destinations</p><h2 id="dest-title" className="mt-3 text-4xl font-semibold md:text-5xl">Explore Popular Destinations</h2></div>
          <Link to="/destinations" className={btn.outline}>View all</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featured.map((d) => <DestinationCard key={d.id} d={d} />)}</div>
      </section>

      <section className="container-wide mt-24" aria-labelledby="stories-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Journal</p><h2 id="stories-title" className="mt-3 text-4xl font-semibold md:text-5xl">Featured Travel Stories</h2></div>
          <Link to="/articles" className={btn.outline}>All articles</Link>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{featuredArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
      </section>

      <section className="container-wide mt-24" aria-labelledby="cat-title">
        <p className="eyebrow">Categories</p>
        <h2 id="cat-title" className="mt-3 text-4xl font-semibold md:text-5xl">Travel Your Way</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map((c) => <CategoryCard key={c.name} c={c} />)}</div>
      </section>

      <section className="mt-24 bg-sand py-20" aria-labelledby="tips-title">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Advice</p>
            <h2 id="tips-title" className="mt-3 text-4xl font-semibold md:text-5xl">Travel Smarter</h2>
            <img src={img.packing} alt={alt.packing} loading="lazy" width={1200} height={800} className="mt-8 hidden rounded-2xl lg:block" />
          </div>
          <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {tips.map(({ icon: Icon, t, p }, i) => (
              <li key={t} className="border-t border-foreground/15 pt-6">
                <div className="flex items-center gap-3"><span className="font-display text-3xl text-primary">0{i + 1}</span><Icon className="h-6 w-6 text-primary" aria-hidden /></div>
                <h3 className="mt-3 text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ResponsibleTravel />
      <NewsletterSection />
    </>
  );
}
