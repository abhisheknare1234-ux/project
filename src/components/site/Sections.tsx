import { Link } from "@tanstack/react-router";
import { ChevronRight, Leaf } from "lucide-react";
import { useState } from "react";
import { btn, input } from "./styles";

export function PageHeader({ eyebrow, title, intro, crumbs }: { eyebrow: string; title: string; intro?: string; crumbs: { label: string; to?: string }[] }) {
  return (
    <section className="container-wide pb-10 pt-10 md:pt-16">
      <Breadcrumbs items={crumbs} />
      <p className="eyebrow mt-6">{eyebrow}</p>
      <h1 className="fade-up mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
      {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li><Link to="/" className="hover:text-primary">Home</Link></li>
        {items.map((i) => (
          <li key={i.label} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4" aria-hidden />
            {i.to ? <Link to={i.to} className="hover:text-primary">{i.label}</Link> : <span aria-current="page" className="text-foreground">{i.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErr("Please enter a valid email address.");
    setErr(""); setDone(true); setEmail("");
  };
  return (
    <section className="container-wide mt-24" aria-labelledby="newsletter-title">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground md:px-16 md:py-20">
        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 id="newsletter-title" className="text-3xl font-semibold md:text-5xl">Get Travel Inspiration in Your Inbox</h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">Discover new destinations, practical travel tips and inspiring travel stories.</p>
          </div>
          {done ? (
            <p role="status" className="rounded-2xl bg-primary-foreground/10 p-6 text-lg font-semibold">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={submit} noValidate>
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input id="nl-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" aria-invalid={!!err} aria-describedby={err ? "nl-err" : undefined} className={input} />
                <button type="submit" className={btn.accent}>Subscribe</button>
              </div>
              {err && <p id="nl-err" className="mt-2 text-sm font-semibold text-accent">{err}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const responsible = [
  "Respect local communities", "Avoid littering", "Protect natural areas", "Respect wildlife",
  "Support local businesses", "Follow local rules", "Reduce unnecessary plastic use",
];

export function ResponsibleTravel() {
  return (
    <section className="container-wide mt-24" aria-labelledby="resp-title">
      <div className="grid gap-8 border-y py-14 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow flex items-center gap-2"><Leaf className="h-4 w-4" />Responsible Travel</p>
          <h2 id="resp-title" className="mt-3 text-3xl font-semibold md:text-4xl">Leave places better than you found them</h2>
        </div>
        <ul className="flex flex-wrap content-start gap-3">
          {responsible.map((r) => (
            <li key={r} className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground">{r}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
