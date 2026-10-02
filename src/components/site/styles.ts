export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift min-h-11",
  accent:
    "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-105 min-h-11",
  ghostLight:
    "inline-flex items-center justify-center gap-2 rounded-full border border-ink-foreground/60 px-6 py-3 text-sm font-semibold text-ink-foreground backdrop-blur-sm transition-all hover:bg-ink-foreground/15 min-h-11",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary min-h-11",
};

export const chip = (active: boolean) =>
  `min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
    active ? "bg-primary text-primary-foreground" : "bg-card text-foreground border hover:border-primary hover:text-primary"
  }`;

export const input =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";
