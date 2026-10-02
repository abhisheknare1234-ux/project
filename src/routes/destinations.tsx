import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { destinations, destinationFilters } from "@/data/destinations";
import { DestinationCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/Sections";
import { chip } from "@/components/site/styles";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Explore Destinations | WanderVista" },
      { name: "description", content: "Discover destinations across India, Asia, Europe and the Middle East — from Goa's beaches to Tokyo's temples." },
      { property: "og:title", content: "Explore Destinations | WanderVista" },
      { property: "og:description", content: "Filter destinations by region and travel style." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const [filter, setFilter] = useState<(typeof destinationFilters)[number]>("All");
  const list = filter === "All" ? destinations : destinations.filter((d) => d.tags.includes(filter));
  return (
    <>
      <PageHeader eyebrow="Destinations" title="Explore Destinations" intro="Beaches, mountains, heritage cities and global capitals — find the place that calls to you." crumbs={[{ label: "Destinations" }]} />
      <section className="container-wide">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter destinations">
          {destinationFilters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f} className={chip(filter === f)}>{f}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => <DestinationCard key={d.id} d={d} />)}
        </div>
      </section>
    </>
  );
}
