import React from 'react'
import { useState } from "react";
import { Navbar } from '../components/Navbar';
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { useContact } from '../hooks/useContact';

const Contactpage = () => {
  const [sent, setSent] = useState(false);
  const {loading, setLoading, handleContactSave} = useContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    company: "",
    teamSize: "",
    interestedIn: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleContactSave( formData );
    if (response.success) {
      console.log("Contact saved successfully:", response.data);
      setSent(true);
    } else {
      console.error("Error saving contact:", response.error);
      throw new Error("Failed to save contact");
    }
  }

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-reveal">
            <span className="text-sm font-semibold uppercase tracking-wider text-(--coral)">Contact</span>

            <h1 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
              Let's design your program <span className="italic">together</span>.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-(--muted-foreground)">
              Fill in a few details and a Zuari Insurance Brokers Limited advisor will
              reach out within one business day. Prefer email or a phone call? All
              three work.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { i: Mail, l: "Email", v: "hello@zuariinsurance.com" },
                { i: Phone, l: "Phone", v: "+91 80 4000 0000" },
                {
                  i: MapPin,
                  l: "Offices",
                  v: "Bangalore · Mumbai · Delhi · Hyderabad",
                },
              ].map((c) => {
                const Icon = c.i;

                return (
                  <div
                    key={c.l}
                    className="flex items-center gap-4 rounded-2xl border border-(--border)/60 bg-(--card) p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--coral)/15 text-(--coral)">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-(--muted-foreground)">
                        {c.l}
                      </p>
                      <p className="font-medium">{c.v}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-grad-cool opacity-25 blur-2xl animate-blob" />

            <form
              onSubmit={handleSubmit}
              className="rounded-4xl border border-(--border)/60 bg-(--card) p-8 shadow-soft md:p-10"
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-(--coral) text-(--cream) animate-tick">
                    <Check className="h-8 w-8" strokeWidth={3} />
                  </span>

                  <h3 className="mt-6 font-display text-2xl">
                    Thanks, we got it.
                  </h3>

                  <p className="mt-2 max-w-sm text-(--muted-foreground)">
                    A Zuari Insurance Brokers Limited advisor will reach out within
                    one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl">Get a quote</h2>

                  <p className="mt-2 text-sm text-(--muted-foreground)">
                    We'll tailor it to your team and industry.
                  </p>

                  <div className="mt-6 grid gap-4">
                    <Field
                      label="Full name"
                      name="name"
                      placeholder="Ada Lovelace"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />

                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="ada@company.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />

                    <Field
                      label="Phone Number"
                      name="phoneNo"
                      type="number"
                      placeholder="+91 98765 43210"
                      onChange={(e) => setFormData({...formData, phoneNo: e.target.value})}
                    />

                    <Field
                      label="Company"
                      name="company"
                      placeholder="Difference Engines Pvt Ltd"
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        type="number"
                        label="Team size"
                        name="teamSize"
                        placeholder="e.g. 120"
                        onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                      />

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-(--foreground)/70">
                          Interested in
                        </label>

                        <select className="w-full rounded-xl border border-(--border) bg-(--background) px-4 py-3 text-sm outline-none transition focus:border-(--coral) focus:ring-2 focus:ring-(--coral)/30" onChange={(e) => setFormData({...formData, interestedIn: e.target.value})}>
                          <option>Group Health</option>
                          <option>Group Term Life</option>
                          <option>Business Insurance</option>
                          <option>Full program design</option>
                        </select>
                      </div>
                    </div>

                    <button className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-6 py-3.5 text-sm font-semibold text-(--primary-foreground) shadow-soft transition hover:-translate-y-0.5">
                      Send request
                      <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
function Field({ label, name, type = "text", placeholder, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-foreground/70">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/30"
      />
    </div>
  );
}

export default Contactpage