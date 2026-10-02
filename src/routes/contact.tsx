import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/Sections";
import { btn, input } from "@/components/site/styles";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact WanderVista" },
      { name: "description", content: "Get in touch with WanderVista with questions, story ideas or feedback." },
      { property: "og:title", content: "Contact WanderVista" },
      { property: "og:description", content: "Send us your questions, ideas or feedback." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type F = { name: string; email: string; subject: string; message: string };

function ContactPage() {
  const [f, setF] = useState<F>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<F>>({});
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Partial<F> = {};
    if (!f.name.trim()) er.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) er.email = "Please enter a valid email.";
    if (!f.subject.trim()) er.subject = "Please add a subject.";
    if (f.message.trim().length < 10) er.message = "Message should be at least 10 characters.";
    setErrors(er);
    if (!Object.keys(er).length) setSent(true);
  };
  const field = (k: keyof F, label: string, type = "text") => (
    <div>
      <label htmlFor={k} className="mb-2 block text-sm font-semibold">{label}</label>
      {k === "message" ? (
        <textarea id={k} rows={6} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k]} className={input} />
      ) : (
        <input id={k} type={type} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k]} className={input} />
      )}
      {errors[k] && <p className="mt-1 text-sm text-destructive">{errors[k]}</p>}
    </div>
  );
  return (
    <>
      <PageHeader eyebrow="Contact" title="Say Hello" intro="Questions, story ideas or feedback — we'd love to hear from you." crumbs={[{ label: "Contact" }]} />
      <section className="container-wide max-w-2xl">
        {sent ? (
          <p role="status" className="rounded-2xl bg-secondary p-8 text-lg font-semibold text-secondary-foreground">Thanks for reaching out! This demo contact form has received your message.</p>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">{field("name", "Name")}{field("email", "Email", "email")}</div>
            {field("subject", "Subject")}
            {field("message", "Message")}
            <button type="submit" className={btn.primary}>Send Message</button>
          </form>
        )}
      </section>
    </>
  );
}
