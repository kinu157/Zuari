import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Heart,
  Shield,
  Users,
  Sparkles,
  Building2,
  Stethoscope,
  Umbrella,
  Check,
  Star,
  Zap,
} from "lucide-react";
import careImg from "../assets/careImg.jpg";
import familyImg from "../assets/familyImg.jpg";
import businessImg from "../assets/businessImg.jpg";
import { Rotator, Counter } from "../components/dynamic-bits";
import { Navbar } from "../components/Navbar";
import { useReveal } from "../hooks/useReveal";
import Footer from "../components/Footer";


function RevealItem({ children, className = "", delay = 0, offset = 40 }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${offset}px)`,
        transition: `all 0.9s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const Homepage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { ref, visible } = useReveal();
  const stats = [
    { n: 3200, s: "+", label: "Companies insured" },
    { n: 480000, s: "+", label: "Lives covered" },
    { n: 96, s: "%", label: "Claim settlement" },
    { n: 24, s: "h", label: "Avg. claim TAT" },
  ];

  const logos = [
    {
      name: "Zuari Industries",
      url: "./src/assets/Company/zuari_logo.png",
    },
    {
      name: "Zuari Finserv Limited",
      url:"./src/assets/Company/Zuari_whatsnew2.jpg"
    },
    {
      name: "Zuari Management Services",
      url:""
    },
    {
      name: "Zuari Agro Chemical",
      url:"./src/assets/Company/Zuari_Agro.png"
    },
    {
      name: "Paradeep Phosphates",
      url:"./src/assets/Company/Pradeep.svg"
    },
    {
      name: "Zuari Farmhub",
      url:"./src/assets/Company/farmhub-logo.jpg"
    },
    {
      name: "Zuari Envien Bioenergy",
      url:""
    },
    {
      name: "Zuari Infraworld India",
      url:"./src/assets/Company/zuari-adventz_logo.png"
    },
    {
      name: "Zuari Furniture Limited",
      url:""
    },
    {
      name: "Texmaco Infrastructure & Holdings",
      url:""
    },
    {
      name: "Simon India",
      url:""
    },
    {
      name: "Texmaco Rail & Engineering",
      url:"./src/assets/Company/logo.png"
    },
    {
      name: "Zuari IAV Private Limited",
      url:""
    },
    {
      name: "Zuari International",
      url:""
    },
    {
      name: "Lionel India",
      url:"./src/assets/Company/logo_Lionel_India_Ltd.jpg"
    },
    {
      name:"Adventz Group",
      url:"./src/assets/Company/logo2.png"
    }
    // "Zuari Idustries",
    // "Zuari Finserv Limited",
    // "Zuari Management Services",
    // "Zuari Agro Chemical",
    // "Paradeep Phosphates",
    // "Zuari Farmhub",
    // "Zuari Envien Bioenergy",
    // "Zuari Infraworld India",
    // "Zuari Furniture Limited",
    // "Texmaco Infrastructure & Holdings",
    // "Simon India",
    // "Texmaco Rail & Engineering",
    // "Zuari IAV Private Limited",
    // "Zuari International ",
    // "Lionel India",
  ];

  const marqueeItems = Array(6).fill(logos).flat();

  const Solutions = [
    {
      icon: Stethoscope,
      title: "Group Health",
      desc: "Comprehensive group medical cover with maternity, OPD, and mental wellness built in.",
      color: "bg-(--coral)/15 text-(--coral)",
    },
    {
      icon: Umbrella,
      title: "Group Term Life",
      desc: "Financial safety net for every employee's family — instant onboarding, no medicals.",
      color: "bg-(--teal)/15 text-(--teal)",
    },
    {
      icon: Users,
      title: "Accident & Disability",
      desc: "24/7 personal accident cover with worldwide protection and lump-sum payouts.",
      color: "bg-(--sun)/40 text-(--foreground)",
    },
    {
      icon: Building2,
      title: "Business & Property",
      desc: "Cover offices, equipment, and liability — from cyber to D&O in a single program.",
      color: "bg-(--primary)/10 text-(--primary)",
    },
  ];

  const rows = [
    {
      badge: "For Employees",
      title: "A pocket-sized benefits companion.",
      body: "Every covered employee gets a modern app: instant e-cards, network hospital search, teleconsults, and cashless claim tracking.",
      bullets: [
        "24/7 doctor on chat",
        "Family enrollment in 3 taps",
        "Wellness credits & rewards",
      ],
      img: careImg,
      align: "left",
    },
    {
      badge: "For Families",
      title: "One umbrella for the people who matter most.",
      body: "Dependents, parents, and life partners — all covered under a single, portable plan that follows them anywhere in India.",
      bullets: [
        "Parents cover",
        "Pan-India cashless network",
        "Maternity & newborn included",
      ],
      img: familyImg,
      align: "right",
    },
    {
      badge: "For HR & Founders",
      title: "Dashboards, not spreadsheets.",
      body: "See enrollment, claims, and utilization in real-time. Add employees in bulk, download endorsements, and get renewal alerts before they matter.",
      bullets: [
        "Bulk CSV onboarding",
        "Live claims analytics",
        "HRMS integrations",
      ],
      img: businessImg,
      align: "left",
    },
  ];

  const items = [
    {
      q: "Onboarding 300 employees took a weekend. Claims that used to take weeks now settle in a day.",
      n: "Priya Menon",
      r: "Head of People, Northwind",
    },
    {
      q: "The dashboard alone saved our HR team 20 hours a month. But the humans behind it are the real product.",
      n: "Rahul Iyer",
      r: "COO, Vertex Labs",
    },
    {
      q: "We've had four claims this year. Every single one was closed without me lifting a finger.",
      n: "Ananya Rao",
      r: "Founder, Kite & Co",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    navigate(`/contact?email=${encodeURIComponent(email.trim())}`);
  };

  return (
    <div>
      <Navbar />
      
      <section className="relative overflow-hidden">
        {/* Floating blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 bg-grad-warm opacity-30 blur-3xl animate-blob" />
        <div
          className="pointer-events-none absolute top-40 -right-24 h-112 w-md bg-grad-cool opacity-25 blur-3xl animate-blob"
          style={{ animationDelay: "-6s" }}
        />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-(--sun) opacity-30 blur-3xl animate-float-slow" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:grid-cols-2 md:items-center md:pt-24">
          <div className="animate-reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--border)/70 bg-(--background)/70 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-(--coral)" />
              IRDAI licensed insurance brokerage
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Insurance your{" "}
              <Rotator words={["team", "family", "business", "future"]} />
              <br />
              <span className="italic font-normal">actually</span> deserves.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-(--muted-foreground)">
              Zuari Insurance Brokers Limited designs group health, life and
              business insurance for growing companies — with human advisors,
              faster claims, and a delightful dashboard for every employee.
            </p>

            <form
              className="mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your work email"
                className="w-full rounded-full border border-(--border) bg-(--background) px-5 py-3.5 text-sm outline-none transition focus:border-(--coral) focus:ring-2 focus:ring-(--coral)/30"
              />
              <button
                type="submit"
                className="group relative overflow-hidden whitespace-nowrap rounded-full bg-(--primary) px-6 py-3.5 text-sm font-semibold text-(--primary-foreground) shadow-soft transition hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </div>
              </button>
            </form>
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2.5rem] shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Zuari Insurance Brokers Limited team advising a client"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-(--background) px-4 py-3 shadow-soft animate-float">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--coral)/15 text-(--coral)">
                <Heart className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-(--muted-foreground)">
                  Claim settled
                </p>
                <p className="text-sm font-semibold">₹2.4 L · 6h</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-16 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft animate-float-slow">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--teal)/15 text-(--teal)">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-(--muted-foreground)">
                  Policy active
                </p>
                <p className="text-sm font-semibold">128 lives covered</p>
              </div>
            </div>

            <div
              className="absolute bottom-2 left-6 rounded-2xl bg-(--primary) px-4 py-3 text-(--primary-foreground) shadow-soft animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <p className="text-xs opacity-70">NPS</p>
              <p className="font-display text-2xl font-semibold">72</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-(--border)/60 bg-(--background)/60 py-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-(--muted-foreground)">
          Trusted by forward-thinking companies
        </p>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee">
            {marqueeItems.map((logo, i) => (
              <span
                key={i}
                className="mx-8 whitespace-nowrap font-display text-2xl font-semibold text-(--foreground)/40"
              >
                {logo?.url ? <img src={logo.url} alt={logo.name} className="h-12.5 w-full object-contain" /> : logo?.name}
              </span>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-(--background) to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-(--background) to-transparent" />
        </div>
      </section>

      <section ref={ref} className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 rounded-4xl bg-(--primary) p-10 text-(--primary-foreground) md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.7s ${i * 120}ms`,
              }}
            >
              <p className="font-display text-5xl font-semibold">
                {visible ? <Counter to={s.n} suffix={s.s} /> : `0${s.s}`}
              </p>
              <p className="mt-2 text-sm opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-(--coral)">
              What we do
            </span>
            <h2 className="mt-2 max-w-2xl font-display text-4xl md:text-5xl">
              Insurance programs, <span className="italic">designed</span> — not
              just sold.
            </h2>
          </div>
          <p className="max-w-md text-(--muted-foreground)">
            Whether you're a 20-person startup or a 5,000-person enterprise, we
            shape a program around your people, industry, and budget.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Solutions.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="group relative overflow-hidden rounded-3xl border border-(--border)/60 bg-(--card) p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
                style={{ animation: `reveal-up 0.7s ${i * 100}ms both` }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-grad-warm opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${it.color}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-(--muted-foreground)">
                  {it.desc}
                </p>
                <Link
                  to="/solutions"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-(--foreground)/80 transition group-hover:text-(--coral)"
                >
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 py-24">
        {rows.map((row, i) => (
          <RevealItem
            key={row.title}
            className={`grid gap-12 md:grid-cols-2 md:items-center ${row.align === "right" ? "md:[&>*:first-child]:order-2" : ""}`}
            delay={i * 120}
          >
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-grad-cool opacity-20 blur-2xl animate-blob" />
              <div className="overflow-hidden rounded-4xl bg-(--card) shadow-soft">
                <img
                  src={row.img}
                  alt={row.title}
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-(--secondary) px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--foreground)/70">
                <Zap className="h-3 w-3 text-(--coral)" />
                {row.badge}
              </span>
              <h3 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                {row.title}
              </h3>
              <p className="mt-4 text-lg text-(--muted-foreground)">
                {row.body}
              </p>
              <ul className="mt-6 space-y-3">
                {row.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--coral) text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-(--foreground)/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </section>

      <section className="relative overflow-hidden bg-grad-warm py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-white blur-3xl animate-float-slow" />
          <div className="absolute -bottom-20 right-10 h-72 w-72 rounded-full bg-teal blur-3xl animate-float" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center text-white">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            Concierge claims
          </span>
          <h2 className="max-w-3xl font-display text-4xl md:text-6xl">
            Human Care, <span className="italic">Every Where.</span>
          </h2>
          <p className="max-w-2xl text-white/90">
            When a claim happens, a dedicated Zuari Insurance Brokers Limited
            specialist takes over — coordinating with the hospital, chasing
            paperwork, and keeping your team informed every step of the way.
          </p>
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-(--foreground) shadow-soft transition hover:-translate-y-0.5"
          >
            Talk to a specialist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-4xl md:text-5xl">
            Loved by the teams that{" "}
            <span className="text-grad">wear the pager</span>.
          </h2>
          <div className="hidden items-center gap-1 md:flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-5 w-5 fill-(--coral) text-(--coral)" />
            ))}
            <span className="ml-2 text-sm font-semibold">
              4.9 · 800+ reviews
            </span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={t.n}
              className="group relative overflow-hidden rounded-3xl border border-(--border)/60 bg-(--card) p-8 transition hover:-translate-y-1 hover:shadow-soft"
              style={{ animation: `reveal-up 0.7s ${i * 150}ms both` }}
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-grad-cool opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-(--coral) text-(--coral)"
                  />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-snug">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-(--border)/60 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-grad-warm font-semibold text-white">
                  {t.n.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.n}</p>
                  <p className="text-xs text-(--muted-foreground)">{t.r}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-(--primary) p-12 text-(--primary-foreground) md:p-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-grad-warm opacity-40 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-teal opacity-30 blur-3xl animate-float-slow" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                Ready for Insurance</h2>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-(--foreground) shadow-soft transition hover:-translate-y-0.5"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
