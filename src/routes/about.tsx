import { createFileRoute } from "@tanstack/react-router";
import { img, alt } from "@/data/images";
import { PageHeader, ResponsibleTravel } from "@/components/site/Sections";

const blocks = [
  { t: "Our mission", p: "WanderVista is a travel blog created to help readers discover destinations, understand different cultures and prepare for memorable journeys with confidence." },
  { t: "What you'll find", p: "Destination guides, suggested itineraries, practical packing and safety advice, budget planning ideas and stories that celebrate local food, heritage and nature." },
  { t: "Our travel philosophy", p: "We believe in slower, more curious travel — fewer checklists and more conversations, long walks and time to let a place reveal itself." },
  { t: "Exploration", p: "From Himalayan trails to Southeast Asian street markets, we research widely and aim to present evergreen, useful information. Always confirm current rules, prices and timings with official sources." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WanderVista | Our Travel Philosophy" },
      { name: "description", content: "Learn about WanderVista's mission to help travellers discover destinations, understand cultures and travel responsibly." },
      { property: "og:title", content: "About WanderVista" },
      { property: "og:description", content: "Our mission, travel philosophy and commitment to responsible tourism." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="About" title="About WanderVista" intro="Discover Places. Plan Journeys. Create Memories." crumbs={[{ label: "About" }]} />
      <section className="container-wide grid items-start gap-12 lg:grid-cols-2">
        <img src={img.kashmir} alt={alt.kashmir} width={1200} height={800} className="w-full rounded-3xl object-cover shadow-soft" />
        <div className="space-y-8">
          {blocks.map((b) => (
            <div key={b.t}><h2 className="text-2xl font-semibold">{b.t}</h2><p className="mt-2 leading-relaxed text-muted-foreground">{b.p}</p></div>
          ))}
        </div>
      </section>
      <ResponsibleTravel />
    </>
  ),
});
