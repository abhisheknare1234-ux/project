import { createFileRoute } from "@tanstack/react-router";
import { categories } from "@/data/articles";
import { CategoryCard } from "@/components/site/Cards";
import { PageHeader } from "@/components/site/Sections";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Travel Categories | WanderVista" },
      { name: "description", content: "Browse WanderVista stories by theme: India, international, adventure, beaches, heritage, budget travel, food and tips." },
      { property: "og:title", content: "Travel Categories | WanderVista" },
      { property: "og:description", content: "Find travel stories by theme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Categories" title="Travel by Theme" intro="Pick a theme to see every related guide and story." crumbs={[{ label: "Categories" }]} />
      <section className="container-wide grid gap-5 md:grid-cols-2">
        {categories.map((c) => <CategoryCard key={c.name} c={c} variant="large" />)}
      </section>
    </>
  ),
});
