import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Heart, Wheat, Users, Award, Sparkles } from "lucide-react"
import { locations } from "@/lib/data"
import { HeroSlideshow } from "@/components/hero-slideshow"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Features Section - Why Choose Us */}
      <section className="py-10 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-secondary relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto relative">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Unser Versprechen
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 sm:mb-4 text-balance">
              Warum Balkan Bäckerei?
            </h2>
            <p className="text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-balance">
              Wir bringen den authentischen Geschmack des Balkans nach Deutschland - mit Hingabe zu Qualität und Tradition.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Wheat,
                title: "Tradition & Rezepte",
                description: "Authentische Balkan-Rezepte, über Generationen weitergegeben und mit Liebe zubereitet.",
                color: "bg-amber-500/10 text-amber-600"
              },
              {
                icon: Sparkles,
                title: "Täglich Frisch",
                description: "Jeden Morgen frisch gebacken - für höchste Qualität und besten Geschmack.",
                color: "bg-emerald-500/10 text-emerald-600"
              },
              {
                icon: Users,
                title: "Freundlich & Vertrauenswürdig",
                description: "Persönlicher Service und herzliche Atmosphäre in allen drei Standorten.",
                color: "bg-blue-500/10 text-blue-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card border-none shadow-md card-glow active:scale-[0.98] sm:hover:-translate-y-3 transition-all duration-300 sm:duration-500 group overflow-hidden">
                <CardContent className="p-5 sm:p-8 lg:p-10 text-center relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none group-hover:w-20 group-hover:h-20 sm:group-hover:w-24 sm:group-hover:h-24 transition-all duration-500" />
                  
                  <div className={`w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-6 rounded-xl sm:rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 sm:group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage / Storytelling Section */}
      <section className="py-10 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-card relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          {/* Main Story Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 xl:gap-16 items-center mb-12 lg:mb-24">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Unsere Geschichte
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-6 text-balance">
                Die Kunst des Balkan-Backens
              </h2>
              <p className="text-muted-foreground mb-3 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                Balkan Bäckerei begann vor Jahrzehnten mit einer Leidenschaft für authentisches Balkan-Backen. Heute betreiben wir drei Bäckereien in Offenbach, Dreieich und Hanau und servieren täglich frisches, hochwertiges Brot und Gebäck.
              </p>
              <p className="text-muted-foreground mb-5 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Unsere Rezepte wurden über Generationen weitergegeben und verbinden Tradition mit modernem Geschmack. Jede Bäckerei ist einzigartig und bietet eine große Auswahl an Produkten, die mit Sorgfalt hergestellt werden.
              </p>
              <Button asChild className="text-sm sm:text-base btn-shine shadow-md active:scale-[0.98] sm:hover:shadow-lg sm:hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                <Link href="/ueber-uns">Mehr Erfahren</Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl order-1 lg:order-2 group">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=450&fit=crop"
                alt="Baker working with dough"
                fill
                className="object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500 sm:duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Timeline / History Visual */}
          <div className="relative">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
                Unsere Reise
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base text-balance">
                Von bescheidenen Anfängen zu drei erfolgreichen Standorten
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Mobile timeline connector */}
              <div className="lg:hidden absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/20 via-primary/30 to-primary/20" />
              
              <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-8">
                {[
                  {
                    icon: Award,
                    year: "Die Anfänge",
                    title: "Tradition Beginnt",
                    description: "Mit überlieferten Familienrezepten und der Leidenschaft für authentisches Backen startete unsere Reise."
                  },
                  {
                    icon: Heart,
                    year: "Wachstum",
                    title: "Drei Standorte",
                    description: "Durch die Liebe unserer Kunden wuchsen wir zu drei Bäckereien in Offenbach, Dreieich und Hanau."
                  },
                  {
                    icon: Sparkles,
                    year: "Heute",
                    title: "Qualität & Frische",
                    description: "Täglich backen wir frische Köstlichkeiten und bewahren dabei unsere traditionellen Werte."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative group flex lg:block gap-4 lg:gap-0">
                    {/* Timeline dot - Mobile only */}
                    <div className="lg:hidden flex shrink-0 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 items-center justify-center z-10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <Card className="flex-1 bg-secondary/50 border-none shadow-md active:scale-[0.98] sm:hover:shadow-xl transition-all duration-300 sm:duration-500 sm:hover:-translate-y-2">
                      <CardContent className="p-4 sm:p-6 lg:p-8 lg:text-center">
                        {/* Desktop icon */}
                        <div className="hidden lg:flex w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <item.icon className="w-8 h-8 text-primary" />
                        </div>
                        <span className="text-xs sm:text-sm text-primary font-medium">{item.year}</span>
                        <h4 className="font-serif text-base sm:text-lg lg:text-xl font-semibold text-foreground mt-0.5 sm:mt-1 mb-1 sm:mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm sm:text-base line-clamp-3 lg:line-clamp-none">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Locations Section */}
      <section className="py-10 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-muted relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto relative">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Besuchen Sie Uns
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 sm:mb-4 text-balance">
              Unsere Standorte
            </h2>
            <p className="text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-balance">
              Besuchen Sie uns an einem unserer drei Standorte im Frankfurt-Rhein-Main-Gebiet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
            {locations.map((location) => (
              <Link key={location.id} href={`/standorte/${location.id}`} className="group block">
                <Card className="bg-card border-none shadow-lg card-glow active:scale-[0.98] sm:hover:-translate-y-3 transition-all duration-300 sm:duration-500 overflow-hidden h-full">
                  <CardContent className="p-0">
                    {/* Image header */}
                    <div className="relative h-28 sm:h-36 lg:h-40 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent z-10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-3 sm:border-4 border-card shadow-xl z-20 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500">
                        <Image
                          src={location.logo || "/placeholder.svg"}
                          alt={`${location.name} Logo`}
                          fill
                          className="object-cover scale-150"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 sm:p-6 lg:p-8 pt-2 sm:pt-4 text-center">
                      <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-semibold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{location.city}</h3>
                      <p className="text-muted-foreground text-xs sm:text-base mb-3 sm:mb-4 line-clamp-2">{location.shortDescription}</p>
                      
                      {/* Info pills */}
                      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary rounded-full text-[10px] sm:text-sm text-muted-foreground">
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="truncate max-w-[80px] sm:max-w-[120px]">{location.address.split(",")[0]}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary rounded-full text-[10px] sm:text-sm text-muted-foreground">
                          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          6:00 - 19:00
                        </span>
                      </div>
                      
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 text-primary font-medium text-xs sm:text-base group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300">
                        Details Ansehen
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <Button asChild size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 btn-shine shadow-lg active:scale-[0.98] sm:hover:shadow-xl sm:hover:scale-105 transition-all duration-300">
              <Link href="/standorte">Alle Standorte Erkunden</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Taste the Tradition */}
      <section className="py-12 sm:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated decorative elements - hidden on mobile for cleaner look */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/15 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground/20 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-primary-foreground/5 rounded-full blur-xl" />
        </div>
        
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center relative">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary-foreground/20">
            Jetzt Erleben
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-6 text-balance">
            Kosten Sie die Tradition
          </h2>
          <p className="text-primary-foreground/90 mb-6 sm:mb-10 max-w-2xl lg:max-w-3xl mx-auto text-balance text-sm sm:text-lg lg:text-xl leading-relaxed">
            Besuchen Sie eine unserer Bäckereien und erleben Sie die authentischen Aromen des Balkans. Frisches Brot, traditionelles Gebäck und herzliche Gastfreundschaft erwarten Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center relative z-10">
            <Button asChild size="lg" variant="secondary" className="text-sm sm:text-lg lg:text-xl px-6 sm:px-10 py-3.5 sm:py-5 shadow-xl active:scale-[0.98] sm:hover:shadow-2xl sm:hover:scale-105 transition-all duration-300 font-semibold">
              <Link href="/standorte">Besuchen Sie Uns Heute!</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-sm sm:text-lg lg:text-xl px-6 sm:px-10 py-3.5 sm:py-5 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent active:scale-[0.98] sm:hover:scale-105 transition-all duration-300 font-semibold">
              <Link href="/kontakt">Kontakt Aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
