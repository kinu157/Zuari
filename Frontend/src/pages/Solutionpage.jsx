import React from 'react'
import { Link } from 'react-router';
import { Stethoscope, Umbrella, Users, Building2, Heart, Plane, ShieldCheck, Briefcase, ArrowRight, Check } from "lucide-react";
import { Navbar } from '../components/Navbar';

const Solutionpage = () => {
    const solutions = [
  {
    icon: Stethoscope,
    title: "Group Health Insurance",
    desc: "Comprehensive medical cover for employees and dependents.",
    features: [
      "Cashless at 10,000+ hospitals",
      "Maternity & OPD included",
      "Mental wellness benefits",
    ],
    color: "bg-[color:var(--coral)]/15 text-[color:var(--coral)]",
  },
  {
    icon: Umbrella,
    title: "Group Term Life",
    desc: "Financial protection for every employee's family.",
    features: [
      "Up to ₹5 Cr sum assured",
      "No medicals required",
      "Instant onboarding",
    ],
    color: "bg-[color:var(--teal)]/15 text-[color:var(--teal)]",
  },
  {
    icon: Users,
    title: "Personal Accident",
    desc: "Worldwide accident cover with 24/7 support.",
    features: [
      "Global coverage",
      "Permanent disability payouts",
      "Family transportation benefit",
    ],
    color: "bg-[color:var(--sun)]/40 text-[color:var(--foreground)]",
  },
  {
    icon: Building2,
    title: "Business Property",
    desc: "Cover for offices, equipment, and inventory.",
    features: [
      "Fire & allied perils",
      "Machinery breakdown",
      "Business interruption",
    ],
    color: "bg-[color:var(--primary)]/10 text-[color:var(--primary)]",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Liability",
    desc: "Protection against ransomware, breaches, and lawsuits.",
    features: [
      "Incident response team",
      "Ransom & extortion cover",
      "Regulatory fines",
    ],
    color: "bg-[color:var(--coral)]/15 text-[color:var(--coral)]",
  },
  {
    icon: Briefcase,
    title: "Directors & Officers",
    desc: "Personal liability cover for founders and executives.",
    features: [
      "Investor-mandated cover",
      "Legal defense costs",
      "Employment practices",
    ],
    color: "bg-[color:var(--teal)]/15 text-[color:var(--teal)]",
  },
  {
    icon: Plane,
    title: "Business Travel",
    desc: "Insurance for teams traveling for work — anywhere.",
    features: [
      "Trip cancellation",
      "Medical evacuation",
      "Lost baggage",
    ],
    color: "bg-[color:var(--sun)]/40 text-[color:var(--foreground)]",
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    desc: "Preventive health for lower claims and happier teams.",
    features: [
      "Annual health checks",
      "Fitness challenges",
      "Nutritionist access",
    ],
    color: "bg-[color:var(--primary)]/10 text-[color:var(--primary)]",
  },
];
  return (
    <main>
        <div>
            <Navbar/>
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-grad-cool p-12 md:p-20 )">
        <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-coral opacity-30 blur-3xl animate-blob" />
        <div className="relative max-w-2xl text-[color:var(--cream)]">
          <span className="rounded-full bg-[color:var(--cream)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Solutions</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Insurance for every corner of your company.</h1>
          <p className="mt-4 text-(--white)/90">Pick a starting point below, or let us design an integrated program that covers all of it under one roof.</p>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)]/60 bg-[color:var(--card)] p-6 transition hover:-translate-y-1 hover:shadow-soft"
              style={{ animation: `reveal-up 0.6s ${i * 80}ms both` }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-grad-warm opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.color}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--coral)]" strokeWidth={3} />
                    <span className="text-[color:var(--foreground)]/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-16 rounded-[2rem] bg-(--primary) p-10 text-center text-(--primary-foreground) md:p-16">
        <h2 className="font-display text-3xl md:text-4xl">Not sure where to start?</h2>
        <p className="mx-auto mt-3 max-w-xl text-(--primary-foreground)/80">Tell us about your team and we'll suggest the right mix — usually in a single call.</p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:-translate-y-0.5">
          Book a call <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
    </main>
  )
}

export default Solutionpage