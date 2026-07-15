import { Link } from "react-router";
import logo from "../assets/ZuariLogo.png";
import AppStore from "../assets/app_store-removebg-preview.png";
import InstaLog from "../assets/insta.jpg";
import Faceboo from "../assets/facebookLogo.png";
import LinkedI from "../assets/LinkedInLogo.jpg";
import Play from "../assets/PlayStore.png";

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
                                className="h-20 w-auto object-contain"
                            />
                        </Link>

                        <div className="mt-6 flex items-center gap-4">
                            <p>Follow us </p>
                            <Link to="" className="text-[#1877F2] hover:text-[#125bbb]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </Link>
                            <Link to="" className="text-(--muted-foreground) hover:text-(--foreground)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 102 102" id="instagram">
                                    <defs>
                                        <radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                                            <stop offset=".09" stop-color="#fa8f21"></stop>
                                            <stop offset=".78" stop-color="#d82d7e"></stop>
                                        </radialGradient>
                                        <radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                                            <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
                                            <stop offset="1" stop-color="#8c3aaa"></stop>
                                        </radialGradient>
                                    </defs>
                                    <path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                                    <path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                                    <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
                                </svg>
                            </Link>
                            <Link to="https://www.linkedin.com/company/zuari-insurance-brokers-ltd/about/?viewAsMember=true" className="text-(--muted-foreground) hover:text-(--foreground)" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 72 72" id="linkedin">
                                    <g id="providers-list" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                        <g id="linkedin">
                                            <rect id="Rectangle-2" width="72" height="72" x="0" y="0" fill="#117EB8" rx="4"></rect>
                                            <path id="Shape" fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className=" flex flex-col items-start max-w-40">
                            <img src={AppStore} alt="Download on the App Store" className="mt-4 w-full scale-107" />
                            <img src={Play} alt="Download on the App Store" className="-mt-6 w-full" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Company</h4>
                        <ul className="mt-4 space-y-2 text-sm text-(--muted-foreground)">

                            <li><Link to="" className="hover:text-(--foreground)">Newsletters</Link></li>
                            <li><Link to="" className="hover:text-(--foreground)">Testimonials</Link></li>
                            <li><Link to="" className="hover:text-(--foreground)">Apps</Link></li>
                            <li><Link to="/privacy" className="hover:text-(--foreground)">Privacy Notice</Link></li>
                            <li><Link to="" className="hover:text-(--foreground)">FAQs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold">Get in touch</h4>
                        <ul className="mt-2 space-y-2 text-sm text-(--muted-foreground) mb-4">
                            <li>wecare@zuariinsurance.in</li>
                            <li>011-45494500</li>
                        </ul>
                        <h2>Registered Office</h2>
                        <ul className="mt-2 space-y-2 text-sm text-(--muted-foreground) mb-4">
                            <li>8th Floor, Tower-A, Global Business Park,
                                Sector-26, M.G Road Gurgaon-122002, Haryana</li>
                        </ul>
                        <h2>Corporate Office</h2>
                        <ul className="mt-2 space-y-2 text-sm text-(--muted-foreground) mb-4">
                            <li>A-32, First Floor, Mohan Cooperative Industrial Estate
                                Mathura Road, Badarpur, New Delhi-110044</li>
                        </ul>
                        <p className=" text-sm font-semibold">CIN : U66010HR2003PLC137044</p>

                    </div>
                </div>
                <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-(--border)/60 pt-6 md:flex-row md:items-center">
                    <p className="text-xs text-(--muted-foreground)">© {new Date().getFullYear()} Zuari Insurance Brokers Limited. IRDAI licensed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer