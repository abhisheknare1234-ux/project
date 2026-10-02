import { Link } from "@tanstack/react-router";
import { Compass, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram (demo link)" },
  { icon: Facebook, label: "Facebook (demo link)" },
  { icon: Twitter, label: "X / Twitter (demo link)" },
  { icon: Youtube, label: "YouTube (demo link)" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-wide grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground"><Compass className="h-5 w-5" /></span>
            <span className="font-display text-2xl font-semibold">WanderVista</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">An independent travel publication sharing destination guides, practical tips and stories to help you plan thoughtful journeys.</p>
        </div>
        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            <li><Link to="/destinations" className="hover:text-ink-foreground">Destinations</Link></li>
            <li><Link to="/articles" className="hover:text-ink-foreground">Articles</Link></li>
            <li><Link to="/categories" className="hover:text-ink-foreground">Categories</Link></li>
            <li><Link to="/articles" search={{ category: "Travel Tips" }} className="hover:text-ink-foreground">Travel Tips</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            <li><Link to="/about" className="hover:text-ink-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-ink-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">Follow Us</h3>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <li key={label}>
                <a href="#" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/20 transition-colors hover:bg-accent hover:text-accent-foreground"><Icon className="h-5 w-5" /></a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-foreground/50">Social links are demonstration placeholders.</p>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="container-wide py-6 text-sm text-ink-foreground/60">© 2026 WanderVista. All rights reserved.</p>
      </div>
    </footer>
  );
}
