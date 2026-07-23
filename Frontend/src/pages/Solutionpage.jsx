import React, { useEffect } from 'react'
import { Link } from 'react-router';
import { Stethoscope, Umbrella, Users, Building2, Heart, ShieldCheck, Briefcase, ArrowRight, Check, HardHat, Boxes, Scale } from "lucide-react";
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const Solutionpage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const teamSolutions = [
    { icon: Heart, title: "Employee Wellness Solutions", desc: "Preventive health programs that keep teams thriving.", features: ["Annual health checks", "Mental wellness", "Fitness challenges"], color: "bg-(--coral)/15 text-(--coral)" },
    { icon: Stethoscope, title: "Group Health Insurance", desc: "Cashless medical cover for employees and dependents.", features: ["10,000+ hospitals", "Maternity & OPD", "Day-one coverage"], color: "bg-(--teal)/15 text-(--teal)" },
    { icon: Umbrella, title: "Group Term Life Insurance", desc: "Financial protection for every employee's family.", features: ["Up to ₹5 Cr sum", "No medicals", "Instant onboarding"], color: "bg-(--sun)/40 text-(--foreground)" },
    { icon: Users, title: "Group Personal Accident Cover", desc: "Worldwide accident protection with 24/7 support.", features: ["Global coverage", "Disability payouts", "Family benefit"], color: "bg-(--primary)/10 text-(--primary)" },
    { icon: Check, title: "Claim Assistance", desc: "Seamless claim processing with dedicated support with 24/7 availability.", features: ["Dedicated claim handlers", "24/7 support", "Fast claim settlement"], color: "bg-(--teal)/10 text-(--foreground)" },
  ];

  const businessSolutions = [
    { icon: ShieldCheck, title: "Cyber Insurance", desc: "Defense against ransomware, breaches and lawsuits.", features: ["Incident response", "Ransom cover", "Regulatory fines"], color: "bg-(--coral)/15 text-(--coral)" },
    { icon: Briefcase, title: "Directors' & Officers' Insurance", desc: "Personal liability cover for founders and executives.", features: ["Investor mandated", "Legal defense", "EPL cover"], color: "bg-(--teal)/15 text-(--teal)" },
    { icon: Scale, title: "Commercial General Liability", desc: "Third-party bodily injury and property damage cover.", features: ["Premises liability", "Product liability", "Legal costs"], color: "bg-(--sun)/40 text-(--foreground)" },
    { icon: Boxes, title: "Asset Insurance", desc: "Cover for offices, equipment, and inventory.", features: ["Fire & perils", "Machinery breakdown", "Business interruption"], color: "bg-(--primary)/10 text-(--primary)" },
    { icon: HardHat, title: "Workmen Compensation Policy", desc: "Statutory cover for workplace injuries and claims.", features: ["Statutory compliance", "Medical expenses", "Disability benefit"], color: "bg-(--coral)/15 text-(--coral)" },
    { icon: Building2, title: "Business Property", desc: "End-to-end protection for your physical premises.", features: ["Building cover", "Contents cover", "Rent loss"], color: "bg-(--teal)/15 text-(--teal)" },
  ];

  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="relative overflow-hidden rounded-4xl bg-grad-cool p-12 md:p-20 )">
          <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-coral opacity-30 blur-3xl animate-blob" />
          <div className="relative text-(--cream) w-full">
            <h1 className="mt-4 font-display text-5xl md:text-6xl text-center w-full">Your Business Our Commitment.</h1>
          </div>
        </div>

        <section className="mt-16 mx-auto max-w-sm px-6 py-10">
          <div className="rounded-4xl bg-(--primary) py-6 px-2  text-(--primary-foreground)">
            <h2 className="text-4xl text-center">For Your Team</h2>
          </div>
        </section>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-5">
          {teamSolutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-(--border)/60 bg-(--card) p-6 transition hover:-translate-y-1 hover:shadow-soft"
                style={{ animation: `reveal-up 0.6s ${i * 80}ms both` }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-grad-warm opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.color}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <section className=" mx-auto max-w-sm px-6 py-10">
          <div className="rounded-4xl bg-(--primary) py-6 px-2  text-(--primary-foreground)">
            <h2 className="text-4xl text-center">For Your Business</h2>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessSolutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-(--border)/60 bg-(--card) p-6 transition hover:-translate-y-1 hover:shadow-soft"
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
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-(--coral)" strokeWidth={3} />
                      <span className="text-(--foreground)/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10  text-center  ">

          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--foreground) px-6 py-3 text-sm font-semibold text-(--cream) transition hover:-translate-y-0.5">
            Book a call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />

    </main>
  )
}

export default Solutionpage