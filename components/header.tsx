"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/standorte", label: "Standorte" },
  { href: "/ueber-uns", label: "Über Uns" },
  { href: "/kontakt", label: "Kontakt" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? "bg-[#f3ede3]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(139,90,43,0.12)] py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16 sm:h-18" : "h-20 sm:h-24"
          }`}>
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Balkan Bäckerei - Zur Startseite"
            >
              
              <div className={`relative overflow-hidden p-4 transition-all duration-500 transform ${
                scrolled 
                  ? "w-16 h-16 sm:w-20 sm:h-20 mt-4" 
                  : "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mt-4"
              }   group-hover:border-[#c9a87c]/50 group-hover:scale-105`}>
                <Image
              src="/images/main-logo.png"
              alt="Balkan Bäckerei Logo"
              fill
              className="object-cover scale-110 drop-shadow-[0_0_2px_white] transition-all duration-500"
              priority
            />

              </div>
              <span className={`hidden sm:block font-serif font-bold transition-all duration-500 ${
                scrolled 
                  ? "text-lg lg:text-2xl text-[#2a1f1a]" 
                  : "text-2xl lg:text-3xl text-white drop-shadow-lg"
              }`}>
                
              </span>
            </Link>


            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-all duration-300 text-sm xl:text-base group py-2 ${
                    scrolled 
                      ? isActive(link.href) 
                        ? "text-[#8b5a2b]" 
                        : "text-[#2a1f1a]/80 hover:text-[#8b5a2b]"
                      : isActive(link.href)
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active/Hover underline indicator */}
                  <span className={`absolute -bottom-0 left-0 h-0.5 bg-[#c9a87c] rounded-full transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Right side - CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Primary CTA - Desktop */}
              <Link
                href="/kontakt"
                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  scrolled
                    ? "bg-[#8b5a2b] text-white hover:bg-[#6d4622] shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25 hover:border-white/50"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Kontakt</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  scrolled
                    ? "bg-[#8b5a2b]/10 text-[#8b5a2b] hover:bg-[#8b5a2b]/20"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
                aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">{mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}</span>
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-[#2a1f1a]/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-[#faf6f0] shadow-2xl transition-transform duration-500 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#c9a87c]/20">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#c9a87c]/30">
                <Image
                  src="/images/mainlogo.png"
                  alt="Balkan Bäckerei"
                  fill
                  className="object-cover scale-150"
                />
              </div>
              <span className="font-serif font-bold text-[#2a1f1a]">Balkan Bäckerei</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-[#8b5a2b]/10 flex items-center justify-center text-[#8b5a2b] hover:bg-[#8b5a2b]/20 transition-colors"
              aria-label="Menü schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li 
                  key={link.href}
                  className={`transform transition-all duration-300 ${
                    mobileMenuOpen 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 75}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                      isActive(link.href)
                        ? "bg-[#8b5a2b]/10 text-[#8b5a2b]"
                        : "text-[#2a1f1a]/80 hover:bg-[#c9a87c]/10 hover:text-[#8b5a2b]"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive(link.href) ? "bg-[#c9a87c]" : "bg-[#c9a87c]/30"
                    }`} />
                    <span className="font-medium text-lg">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-6 border-t border-[#c9a87c]/20 bg-[#faf6f0] transform transition-all duration-500 ${
              mobileMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Link
              href="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-[#8b5a2b] text-white font-medium hover:bg-[#6d4622] transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Jetzt Kontaktieren</span>
            </Link>
            <p className="text-center text-sm text-[#2a1f1a]/50 mt-4">
              Mo-Sa: 6:00 - 19:00 Uhr
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
