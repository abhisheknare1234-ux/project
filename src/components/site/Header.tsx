import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Compass, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/categories", label: "Categories" },
  { to: "/articles", label: "Articles" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); setSearchOpen(false); }, [pathname]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/articles", search: { q: q.trim() || undefined } });
    setQ("");
  };

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-background border-transparent"}`}>
      <div className="container-wide flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="WanderVista home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><Compass className="h-5 w-5" /></span>
          <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">WanderVista</span>
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: n.to === "/" }} className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-primary! bg-secondary" }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <button onClick={() => setSearchOpen((v) => !v)} aria-label="Search articles" aria-expanded={searchOpen} className="grid h-11 w-11 place-items-center rounded-full hover:bg-muted"><Search className="h-5 w-5" /></button>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-full hover:bg-muted lg:hidden"><Menu className="h-6 w-6" /></button>
        </div>
      </div>
      {searchOpen && (
        <form onSubmit={submit} role="search" className="container-wide fade-up pb-4">
          <label htmlFor="site-search" className="sr-only">Search articles</label>
          <div className="flex gap-2">
            <input id="site-search" autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search destinations, guides, tips…" className="w-full rounded-full border border-input bg-card px-5 py-3 text-base focus:border-primary focus:outline-none" />
            <button className="rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground">Search</button>
          </div>
        </form>
      )}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-overlay/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} />
        <aside className={`absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-background p-6 shadow-lift transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-xl font-semibold">WanderVista</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full hover:bg-muted" tabIndex={open ? 0 : -1}><X className="h-6 w-6" /></button>
          </div>
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} tabIndex={open ? 0 : -1} activeOptions={{ exact: n.to === "/" }} className="block rounded-xl px-4 py-3 font-display text-2xl" activeProps={{ className: "bg-secondary text-primary" }}>{n.label}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-auto text-sm text-muted-foreground">Discover Places. Plan Journeys. Create Memories.</p>
        </aside>
      </div>
    </header>
  );
}
