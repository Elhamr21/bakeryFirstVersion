"use client"

import React from "react"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-foreground text-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-card/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-card/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
      
      {/* Newsletter Section */}
      <div className="border-b border-card/10">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-10 lg:py-12 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-10">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-lg sm:text-2xl font-semibold mb-1 sm:mb-2">Newsletter Abonnieren</h3>
              <p className="text-card/70 text-xs sm:text-base">Erhalten Sie Neuigkeiten und exklusive Angebote direkt in Ihr Postfach.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-card/10 border border-card/20 text-card placeholder:text-card/50 focus:outline-none focus:border-card/40 transition-colors w-full sm:w-72 text-sm sm:text-base"
                required
              />
              <Button type="submit" variant="secondary" className="px-5 sm:px-6 py-2.5 sm:py-3 font-semibold active:scale-[0.98] sm:hover:scale-105 transition-transform text-sm sm:text-base">
                {subscribed ? "Danke!" : "Abonnieren"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-10 sm:py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo & About */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-card/20 group-hover:border-card/40 transition-colors duration-300 shadow-lg bg-white">
              <Image
                src="/images/main-logo.png"
                alt="Balkan Bäckerei Logo"
                fill
                className="object-contain scale-100 transition-all duration-500"
              />
            </div>
              <span className="font-serif text-lg font-semibold">Balkan Bäckerei</span>
            </div>
            <p className="text-card/70 text-xs sm:text-sm leading-relaxed">
              Traditionelle Balkan-Bäckerei mit authentischen Aromen seit Generationen.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-card/10 border border-card/20 flex items-center justify-center hover:bg-card/20 hover:border-card/40 hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/10 border border-card/20 flex items-center justify-center hover:bg-card/20 hover:border-card/40 hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/10 border border-card/20 flex items-center justify-center hover:bg-card/20 hover:border-card/40 hover:scale-110 transition-all duration-300" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-card/70 hover:text-card hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/standorte" className="text-card/70 hover:text-card hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm inline-block">
                  Standorte
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-card/70 hover:text-card hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm inline-block">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-card/70 hover:text-card hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm inline-block">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">Unsere Standorte</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/standorte/offenbach" className="text-card/70 hover:text-card transition-all duration-300 text-xs sm:text-sm flex items-center gap-2 group">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  Offenbach
                </Link>
              </li>
              <li>
                <Link href="/standorte/dreieich" className="text-card/70 hover:text-card transition-all duration-300 text-xs sm:text-sm flex items-center gap-2 group">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  Dreieich
                </Link>
              </li>
              <li>
                <Link href="/standorte/hanau" className="text-card/70 hover:text-card transition-all duration-300 text-xs sm:text-sm flex items-center gap-2 group">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  Hanau
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">Kontakt</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-card/70 text-xs sm:text-sm group cursor-pointer hover:text-card transition-colors duration-300">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                +49 123 456 789
              </li>
              <li className="flex items-center gap-2 text-card/70 text-xs sm:text-sm group cursor-pointer hover:text-card transition-colors duration-300">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                info@balkanbackerei.de
              </li>
              <li className="flex items-center gap-2 text-card/70 text-xs sm:text-sm group cursor-pointer hover:text-card transition-colors duration-300">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                Mon-Sat: 6:00 - 19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-card/60 text-xs sm:text-sm text-center sm:text-left w-full sm:w-auto">
            © {new Date().getFullYear()} Balkan Bäckerei. Alle Rechte vorbehalten.
          </p>

          {/* Developed by ClearLine Tech - centered */}
          <p className="text-card/40 text-xs text-center w-full sm:w-auto">
            Developed by ClearLine Tech
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/ueber-uns" className="text-card/40 hover:text-card/70 text-xs transition-colors">Impressum</Link>
            <Link href="/kontakt" className="text-card/40 hover:text-card/70 text-xs transition-colors">Datenschutz</Link>
            <p className="text-card/40 text-xs">
              Mit Liebe im Frankfurt-Rhein-Main-Gebiet
            </p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
