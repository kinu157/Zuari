import { Link } from "react-router";
import logo from "../assets/ZuariLogo.png";

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-(--border)/60 bg-(--secondary)/40">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src={logo}
                                alt="Zurai Insurance Brokers"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="mt-4 max-w-sm text-sm text-(--muted-foreground)">
                            An insurance brokerage helping modern companies protect their people and their business — with human advisors and better technology.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Company</h4>
                        <ul className="mt-4 space-y-2 text-sm text-(--muted-foreground)">
                            <li><Link to="/about" className="hover:text-(--foreground)">About</Link></li>
                            <li><Link to="/solutions" className="hover:text-(--foreground)">Solutions</Link></li>
                            <li><Link to="/contact" className="hover:text-(--foreground)">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Get in touch</h4>
                        <ul className="mt-4 space-y-2 text-sm text-(--muted-foreground)">
                            <li>hello@zuariinsurance.com</li>
                            <li>+91 80 4000 0000</li>
                            <li>Bangalore · Mumbai · Delhi</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-(--border)/60 pt-6 md:flex-row md:items-center">
                    <p className="text-xs text-(--muted-foreground)">© {new Date().getFullYear()} Zuari Insurance Brokers Limited. IRDAI licensed. All rights reserved.</p>
                    <p className="text-xs text-(--muted-foreground)">Made with care in India.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer