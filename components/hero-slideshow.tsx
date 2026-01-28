"use client"

import React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"

interface SlideData {
  id: number
  type: "locations-showcase" | "brand" | "location" | "handwerk"
  image: string
  video?: string
  label?: string
  headline: string
  text: string
  cta?: { primary?: string; secondary?: string; href?: string }
  locationId?: string
}

const locationShowcaseData = [
  {
    id: "offenbach",
    name: "Offenbach",
    logo: "/images/logooffenbach.png",
    description: "Unsere Hauptbäckerei im Herzen von Offenbach – frisches Brot und Gebäck seit den Anfängen.",
    address: "Frankfurter Str. 123",
    hours: "6:00 - 19:00"
  },
  {
    id: "dreieich",
    name: "Dreieich",
    logo: "/images/logodreieich.png",
    description: "Eine gemütliche Nachbarschaftsbäckerei mit authentischen Balkan-Aromen.",
    address: "Hauptstraße 45",
    hours: "6:00 - 19:00"
  },
  {
    id: "hanau",
    name: "Hanau",
    logo: "/images/logohanau.png",
    description: "Unser neuester Standort – gleiche Qualität und Tradition für eine neue Gemeinschaft.",
    address: "Langstraße 78",
    hours: "6:00 - 19:00"
  }
]

const slides: SlideData[] = [
  {
    id: 1,
    type: "locations-showcase",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1920&h=1080&fit=crop",
    headline: "3 Standorte. Eine Tradition.",
    text: "Erfahrung, zufriedene Kunden und authentische Balkan-Backkunst an drei erstklassigen Standorten im Rhein-Main-Gebiet.",
    cta: { primary: "Alle Standorte", secondary: "Über Uns" }
  },
  {
    id: 2,
    type: "brand",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&h=1080&fit=crop",
    headline: "Authentische Balkan Bäckerei Tradition",
    text: "Erleben Sie die Wärme frisch gebackener Köstlichkeiten, hergestellt mit Liebe und traditionellen Rezepten seit Generationen.",
    cta: { primary: "Standorte Finden", secondary: "Unsere Geschichte" }
  },
  {
    id: 3,
    type: "location",
    image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1920&h=1080&fit=crop",
    label: "Offenbach",
    headline: "Balkan Bäckerei Offenbach",
    text: "Unsere erste Bäckerei im Herzen von Offenbach – täglich frisches Brot und Gebäck seit den Anfängen.",
    locationId: "offenbach"
  },
  {
    id: 4,
    type: "location",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920&h=1080&fit=crop",
    label: "Dreieich",
    headline: "Balkan Bäckerei Dreieich",
    text: "Eine gemütliche Nachbarschaftsbäckerei mit authentischen Balkan-Aromen.",
    locationId: "dreieich"
  },
  {
    id: 5,
    type: "location",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1920&h=1080&fit=crop",
    label: "Hanau",
    headline: "Balkan Bäckerei Hanau",
    text: "Unser neuester Standort – gleiche Qualität, gleiche Tradition, neue Gemeinschaft.",
    locationId: "hanau"
  },
  {
    id: 6,
    type: "handwerk",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1920&h=1080&fit=crop",
    video: "https://videos.pexels.com/video-files/5702916/5702916-uhd_2560_1440_25fps.mp4",
    headline: "Frisch Gebacken, Jeden Tag",
    text: "Von knusprigem Burek bis zu süßer Baklava – echte Aromen der Balkan-Küche.",
    cta: { primary: "Jetzt Besuchen", href: "/standorte" }
  }
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(slides.length).fill(false))
  const [showControls, setShowControls] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  // Touch swipe handling
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 1200)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 1200)
  }, [isAnimating])

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 1200)
  }

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Preload images
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        setImageLoaded(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
      img.src = slide.image
    })
  }, [])

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-[#2a1f1a]"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide
        const isPrev = index === (currentSlide - 1 + slides.length) % slides.length

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
              isActive 
                ? "opacity-100 z-20" 
                : isPrev 
                  ? "opacity-0 z-10" 
                  : "opacity-0 z-0"
            }`}
            aria-hidden={!isActive}
          >
            {/* Background Image/Video with Ken Burns effect */}
            <div className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${
              isActive ? "scale-110" : "scale-100"
            }`}>
              {slide.video && slide.type === "handwerk" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  poster={slide.image}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.headline}
                  fill
                  className="object-cover"
                  priority={index < 2}
                  onLoad={() => handleImageLoad(index)}
                />
              )}
            </div>

            {/* Warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f1a]/60 via-[#2a1f1a]/40 to-[#2a1f1a]/80 z-10" />
            
            {/* Subtle vignette */}
            <div className="absolute inset-0 z-10" style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(42, 31, 26, 0.4) 100%)'
            }} />

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center">
              {/* Special Layout for Locations Showcase Slide */}
              {slide.type === "locations-showcase" ? (
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl xl:max-w-[1600px] mx-auto">
                  {/* Header */}
                  <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h1 
                      className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#faf6f0] font-bold mb-3 sm:mb-4 lg:mb-6 text-balance leading-tight transition-all duration-1000 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                      }`}
                      style={{ 
                        transitionDelay: isActive ? "200ms" : "0ms",
                        textShadow: '0 2px 20px rgba(42, 31, 26, 0.5)'
                      }}
                    >
                      {slide.headline}
                    </h1>
                    <p 
                      className={`text-[#e8dfd4]/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-balance leading-relaxed transition-all duration-1000 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                      }`}
                      style={{ transitionDelay: isActive ? "400ms" : "0ms" }}
                    >
                      {slide.text}
                    </p>
                  </div>

                  {/* Three Location Cards */}
                  <div 
                    className={`grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-8 mb-6 sm:mb-10 transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}
                    style={{ transitionDelay: isActive ? "600ms" : "0ms" }}
                  >
                    {locationShowcaseData.map((loc, idx) => (
                      <Link
                        key={loc.id}
                        href={`/standorte/${loc.id}`}
                        className="group block"
                        style={{ transitionDelay: isActive ? `${700 + idx * 100}ms` : "0ms" }}
                      >
                        <div className="bg-[#faf6f0]/10 backdrop-blur-md border border-[#c9a87c]/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-8 hover:bg-[#faf6f0]/15 hover:border-[#c9a87c]/40 active:scale-[0.98] sm:hover:scale-[1.02] transition-all duration-300 sm:duration-500 h-full">
                          {/* Logo & Content - Horizontal on mobile, Vertical on desktop */}
                          <div className="flex items-center gap-3 sm:gap-0 sm:flex-col">
                            {/* Logo */}
                            <div className="shrink-0 sm:mb-5">
                              <div className="relative w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 sm:border-3 border-[#c9a87c]/30 shadow-lg sm:shadow-xl group-hover:border-[#c9a87c]/60 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-300 sm:duration-500">
                                <Image
                                  src={loc.logo || "/placeholder.svg"}
                                  alt={`${loc.name} Logo`}
                                  fill
                                  className="object-cover scale-150"
                                />
                              </div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="flex-1 min-w-0 sm:text-center">
                              {/* Location Name */}
                              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#faf6f0] font-bold mb-0.5 sm:mb-2 group-hover:text-[#c9a87c] transition-colors duration-300 truncate sm:truncate-none">
                                {loc.name}
                              </h3>
                              
                              {/* Description - Hidden on smallest screens */}
                              <p className="hidden xs:block text-[#e8dfd4]/70 text-xs sm:text-sm lg:text-base sm:text-center mb-2 sm:mb-3 line-clamp-1 sm:line-clamp-2">
                                {loc.description}
                              </p>
                              
                              {/* Info Pills */}
                              <div className="flex items-center sm:justify-center gap-2 sm:gap-3 text-[#c9a87c]/80 text-[10px] sm:text-xs lg:text-sm">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span className="truncate max-w-[100px] sm:max-w-none">{loc.address}</span>
                                </span>
                                <span className="w-1 h-1 rounded-full bg-[#c9a87c]/40" />
                                <span className="whitespace-nowrap">{loc.hours}</span>
                              </div>
                            </div>
                            
                            {/* Arrow - Mobile */}
                            <div className="shrink-0 sm:hidden text-[#c9a87c]/60">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Arrow indicator - Desktop only */}
                          <div className="hidden sm:flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#c9a87c] text-xs sm:text-sm font-medium flex items-center gap-1">
                              Details Ansehen
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  {slide.cta && (
                    <div 
                      className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                      }`}
                      style={{ transitionDelay: isActive ? "1000ms" : "0ms" }}
                    >
                      {slide.cta.primary && (
                        <Button 
                          asChild 
                          size="lg" 
                          className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#8b5a2b] hover:bg-[#6d4722] text-[#faf6f0] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-none"
                        >
                          <Link href="/standorte">{slide.cta.primary}</Link>
                        </Button>
                      )}
                      {slide.cta.secondary && (
                        <Button 
                          asChild 
                          size="lg" 
                          variant="outline" 
                          className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-[#c9a87c]/60 text-[#faf6f0] hover:bg-[#c9a87c]/20 hover:border-[#c9a87c] bg-transparent hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                        >
                          <Link href="/ueber-uns">{slide.cta.secondary}</Link>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* Standard slide layout */
                <div className="text-center px-4 sm:px-6 lg:px-12 xl:px-16 max-w-5xl xl:max-w-6xl mx-auto">
                  {/* Location Label */}
                  {slide.label && (
                    <div className={`inline-flex items-center gap-2 mb-4 sm:mb-6 transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`} style={{ transitionDelay: isActive ? "200ms" : "0ms" }}>
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a87c]" />
                      <span className="text-sm sm:text-base lg:text-lg font-medium tracking-[0.3em] uppercase text-[#c9a87c]">
                        {slide.label}
                      </span>
                      <div className="w-8 sm:w-12 h-px bg-[#c9a87c]/60 ml-2" />
                    </div>
                  )}

                  {/* Headline */}
                  <h1 
                    className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#faf6f0] font-bold mb-4 sm:mb-6 lg:mb-8 text-balance leading-tight transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ 
                      transitionDelay: isActive ? "400ms" : "0ms",
                      textShadow: '0 2px 20px rgba(42, 31, 26, 0.5)'
                    }}
                  >
                    {slide.headline}
                  </h1>

                  {/* Subtext */}
                  <p 
                    className={`text-[#e8dfd4]/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto text-balance leading-relaxed transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: isActive ? "600ms" : "0ms" }}
                  >
                    {slide.text}
                  </p>

                  {/* CTA Buttons */}
                  {slide.cta && (
                    <div 
                      className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                      }`}
                      style={{ transitionDelay: isActive ? "800ms" : "0ms" }}
                    >
                      {slide.cta.primary && (
                        <Button 
                          asChild 
                          size="lg" 
                          className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#8b5a2b] hover:bg-[#6d4722] text-[#faf6f0] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-none"
                        >
                          <Link href={slide.cta.href || "/standorte"}>{slide.cta.primary}</Link>
                        </Button>
                      )}
                      {slide.cta.secondary && (
                        <Button 
                          asChild 
                          size="lg" 
                          variant="outline" 
                          className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-[#c9a87c]/60 text-[#faf6f0] hover:bg-[#c9a87c]/20 hover:border-[#c9a87c] bg-transparent hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                        >
                          <Link href="/ueber-uns">{slide.cta.secondary}</Link>
                        </Button>
                      )}
                    </div>
                  )}

                  {/* Location Link for location slides */}
                  {slide.locationId && (
                    <div 
                      className={`mt-6 sm:mt-8 transition-all duration-1000 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                      }`}
                      style={{ transitionDelay: isActive ? "800ms" : "0ms" }}
                    >
                      <Link 
                        href={`/standorte/${slide.locationId}`}
                        className="inline-flex items-center gap-2 text-[#c9a87c] hover:text-[#faf6f0] transition-colors duration-300 text-sm sm:text-base lg:text-lg font-medium group"
                      >
                        <span>Standort Entdecken</span>
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Subtle Progress Bar (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2a1f1a]/50 z-30">
        <div 
          className="h-full bg-[#c9a87c]/80 transition-all ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transitionDuration: isAnimating ? "1200ms" : "7000ms"
          }}
        />
      </div>

      {/* Dot Navigation - Always visible on mobile for touch, hover on desktop */}
      <div 
        className={`absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5 sm:gap-3 p-2 sm:p-0 transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-100 sm:opacity-40 sm:hover:opacity-100"
        }`}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full touch-manipulation ${
              index === currentSlide
                ? "w-7 sm:w-10 h-2 sm:h-2 bg-[#c9a87c]"
                : "w-2 sm:w-2 h-2 sm:h-2 bg-[#faf6f0]/40 hover:bg-[#faf6f0]/70 active:bg-[#faf6f0]/90"
            }`}
            aria-label={`Folie ${index + 1} anzeigen`}
          />
        ))}
      </div>

      {/* Arrow Navigation - Desktop only (hidden on touch devices) */}
      {!isTouchDevice && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#faf6f0]/10 backdrop-blur-md border border-[#c9a87c]/20 flex items-center justify-center text-[#faf6f0] hover:bg-[#faf6f0]/20 hover:border-[#c9a87c]/40 hover:scale-110 active:scale-95 transition-all duration-300 ${
              showControls ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            aria-label="Vorherige Folie"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#faf6f0]/10 backdrop-blur-md border border-[#c9a87c]/20 flex items-center justify-center text-[#faf6f0] hover:bg-[#faf6f0]/20 hover:border-[#c9a87c]/40 hover:scale-110 active:scale-95 transition-all duration-300 ${
              showControls ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            aria-label="Nächste Folie"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </>
      )}

      {/* Scroll Indicator - Hidden on mobile to save space */}
      <div className="hidden sm:block absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div className="w-6 h-10 border-2 border-[#faf6f0]/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#c9a87c]/70 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-20 pointer-events-none opacity-30">
        <div className="w-12 sm:w-16 h-px bg-[#c9a87c]" />
        <div className="w-px h-12 sm:h-16 bg-[#c9a87c]" />
      </div>
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20 pointer-events-none opacity-30">
        <div className="w-12 sm:w-16 h-px bg-[#c9a87c] ml-auto" />
        <div className="w-px h-12 sm:h-16 bg-[#c9a87c] ml-auto" />
      </div>
    </section>
  )
}
