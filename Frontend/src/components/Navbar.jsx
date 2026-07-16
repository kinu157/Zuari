import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/ZuariLogo.png";


const nav = [
  { to: "/about",     label: "About Us" },
  { to: "/solutions", label: "Solutions" },
  { to: "/contact",   label: "Contact Us" },
  { to: "/career",   label: "Career" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-lg bg-background/75 border-b border-border/60"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Zurai Insurance Brokers"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-(--foreground)/80 transition hover:bg-(--secondary) hover:text-(--foreground)"
            // activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/contact"
            className="rounded-full px-4 py-2 text-sm font-medium hover:bg-(--secondary)"
          >
            Log in
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-(--primary) px-5 py-2.5 text-sm font-semibold text-(--primary-foreground) shadow-soft transition hover:-translate-y-0.5 hover:bg-(--foreground)"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="md:hidden rounded-full p-2 hover:bg-(--secondary)"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-(--border)/60 bg-(--background)/95 backdrop-blur px-6 py-4 animate-reveal">
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-(--secondary)"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-(--primary) px-4 py-2.5 text-center text-sm font-semibold text-(--primary-foreground) transition hover:bg-(--foreground)"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
