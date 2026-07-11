import React from 'react'
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import heroImg from "../assets/heroImg.png";
import { Counter } from "../components/dynamic-bits";
import { ArrowRight } from "lucide-react";

const Aboutpage = () => {
  return (
    <main>
        <div>
            <Navbar/>
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="animate-reveal">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--coral)]">Our story</span>
          <h1 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
            We started Zuari Insurance Brokers Limited because insurance <span className="italic">shouldn't</span> feel like insurance.
          </h1>
          <p className="mt-6 text-lg text-[color:var(--muted-foreground)]">
            After years of watching HR teams drown in PDF policies and employees battle for legitimate claims, we set out to build a brokerage from scratch — one that uses technology to eliminate friction and humans to handle everything that matters.
          </p>
          <p className="mt-4 text-lg text-[color:var(--muted-foreground)]">
            Zuari Insurance Brokers Limited is IRDAI-licensed, independent, and answers only to the companies and people it protects.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-grad-warm opacity-25 blur-2xl animate-blob" />
          <img
            src={heroImg}
            alt="Zuari Insurance Brokers Limited team"
            loading="lazy"
            className="h-[500px] w-full rounded-[2rem] object-cover shadow-soft"/>
        </div>
      </div>

      <div className="mt-24 grid gap-6 md:grid-cols-4">
        {[
          { n: 2021, l: "Founded" },
          { n: 3200, l: "Companies", s: "+" },
          { n: 480000, l: "Lives covered", s: "+" },
          { n: 4, l: "Cities" },
        ].map((s, i) => (
          <div key={s.l} className="rounded-3xl border border-[color:var(--border)]/60 bg-[color:var(--card)] p-8 text-center" style={{ animation: `reveal-up 0.6s ${i * 100}ms both` }}>
            <p className="font-display text-4xl font-semibold text-grad"><Counter to={s.n} suffix={s.s ?? ""} /></p>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="max-w-2xl font-display text-4xl md:text-5xl">What we believe.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Humans over hold music", d: "Every account gets a dedicated advisor. No phone trees, no ticket queues." },
            { t: "Transparent by default", d: "You'll always see what we're paid, what your options are, and what's in the fine print." },
            { t: "Built for the long run", d: "We optimize for renewals, wellness, and lower claims — not one-time commissions." },
          ].map((v, i) => (
            <div key={v.t} className="rounded-3xl border border-[color:var(--border)]/60 bg-[color:var(--card)] p-8" style={{ animation: `reveal-up 0.7s ${i * 120}ms both` }}>
              <h3 className="font-display text-2xl">{v.t}</h3>
              <p className="mt-3 text-[color:var(--muted-foreground)]">{v.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] bg-grad-warm p-10 text-[color:var(--cream)] md:p-14">
        <h3 className="max-w-xl font-display text-3xl md:text-4xl">Want to work with us — or for us?</h3>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--cream)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:-translate-y-0.5">
          Get in touch <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

    </main>
  )
}

export default Aboutpage