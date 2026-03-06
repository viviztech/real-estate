import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                <span className="text-white">LAND</span>
                <span className="text-accent">LIYA</span>
              </span>
            </div>
            <p className="text-sm">
              Pondicherry's premier property platform. Find your dream home or sell your property with ease.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/landliya.properties"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-sm hover:text-primary transition-colors">
                  Buy Properties
                </Link>
              </li>
              <li>
                <Link href="/properties?type=rent" className="text-sm hover:text-primary transition-colors">
                  Rent Properties
                </Link>
              </li>
              <li>
                <Link href="/properties/add" className="text-sm hover:text-primary transition-colors">
                  Post Property
                </Link>
              </li>
              <li>
                <Link href="/localities" className="text-sm hover:text-primary transition-colors">
                  Popular Localities
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Areas */}
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/localities/white-town" className="text-sm hover:text-primary transition-colors">
                  White Town
                </Link>
              </li>
              <li>
                <Link href="/localities/anna-nagar" className="text-sm hover:text-primary transition-colors">
                  Anna Nagar
                </Link>
              </li>
              <li>
                <Link href="/localities/beach-road" className="text-sm hover:text-primary transition-colors">
                  Beach Road
                </Link>
              </li>
              <li>
                <Link href="/localities/lawspet" className="text-sm hover:text-primary transition-colors">
                  Lawspet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-sm">Pondicherry, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="text-sm">info@landliya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Landliya. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
