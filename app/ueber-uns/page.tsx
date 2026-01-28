import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wheat, Heart, Users, Award, Clock, Sparkles } from "lucide-react"

export const metadata = {
  title: "Über Uns | Balkan Bäckerei",
  description: "Erfahren Sie mehr über die Geschichte und Werte der Balkan Bäckerei. Tradition, Qualität und Leidenschaft seit Generationen.",
}

export default function UeberUnsPage() {
  const values = [
    {
      icon: Wheat,
      title: "Qualität",
      description: "Wir verwenden nur die feinsten Zutaten und traditionelle Techniken, um außergewöhnliche Backwaren zu kreieren."
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Jedes Produkt wird mit Liebe und Hingabe hergestellt - das schmeckt man in jedem Bissen."
    },
    {
      icon: Users,
      title: "Gemeinschaft",
      description: "Wir sind mehr als eine Bäckerei - wir sind ein Treffpunkt für Familien und Freunde."
    },
    {
      icon: Award,
      title: "Tradition",
      description: "Unsere Rezepte werden seit Generationen weitergegeben und bewahren den authentischen Geschmack."
    },
    {
      icon: Clock,
      title: "Frische",
      description: "Täglich frisch gebacken, damit Sie immer das Beste bekommen."
    },
    {
      icon: Sparkles,
      title: "Handwerk",
      description: "Echte Handwerkskunst - keine Massenproduktion, sondern individuelle Sorgfalt."
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 animate-fade-in">
              Unsere Geschichte
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in-up">
              Über Uns
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards', opacity: 0 }}>
              Eine Reise durch Tradition, Leidenschaft und den authentischen Geschmack der Balkan-Bäckerei.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-card">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop"
                alt="Traditionelles Backen"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4">
                Seit Generationen
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Eine Familientradition
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  Die Geschichte der Balkan Bäckerei begann vor vielen Jahrzehnten in den malerischen Dörfern des Balkans. Dort, wo das Brotbacken mehr ist als nur ein Handwerk - es ist eine Lebensart, eine Tradition, die von Generation zu Generation weitergegeben wird.
                </p>
                <p>
                  Unsere Großeltern lernten das Handwerk von ihren Eltern, und diese wiederum von den ihren. Jede Generation fügte ihre eigene Note hinzu, aber der Kern blieb stets derselbe: höchste Qualität, beste Zutaten und vor allem - Liebe zum Detail.
                </p>
                <p>
                  Als wir nach Deutschland kamen, brachten wir diese Traditionen mit. Heute führen wir das Erbe unserer Familie fort und teilen den authentischen Geschmack des Balkans mit unseren Kunden im Rhein-Main-Gebiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-muted relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto relative">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4">
              Was uns ausmacht
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Unsere Werte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Diese Grundsätze leiten uns jeden Tag bei allem, was wir tun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-none shadow-md card-glow hover:-translate-y-2 transition-all duration-500 group">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-card">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4">
                Unser Prozess
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Vom Teig zum Tisch
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Früher Morgen", desc: "Unsere Bäcker beginnen bereits um 3 Uhr morgens mit der Zubereitung des Teigs." },
                  { step: "02", title: "Handarbeit", desc: "Jedes Produkt wird von Hand geformt - keine Maschinen können unsere Handwerkskunst ersetzen." },
                  { step: "03", title: "Perfekt gebacken", desc: "In unseren Steinöfen backen wir bei optimaler Temperatur für das beste Ergebnis." },
                  { step: "04", title: "Frisch serviert", desc: "Noch warm aus dem Ofen landet unser Gebäck in den Auslagen - bereit für Sie." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop"
                alt="Bäcker bei der Arbeit"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Quote */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-serif text-primary">"</span>
          </div>
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-foreground mb-6 italic">
            Für uns ist Backen keine Arbeit - es ist unsere Berufung. Jeden Tag aufzustehen und zu wissen, dass wir Menschen mit unseren Produkten glücklich machen, ist das größte Geschenk.
          </blockquote>
          <p className="text-muted-foreground text-base sm:text-lg">
            - Das Team der Balkan Bäckerei
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Besuchen Sie Uns
          </h2>
          <p className="text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Erleben Sie selbst, was Balkan Bäckerei ausmacht. Wir freuen uns auf Ihren Besuch!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
            <Button asChild size="lg" variant="secondary" className="text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link href="/standorte">Standorte Finden</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-sm sm:text-base lg:text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-300">
              <Link href="/kontakt">Kontakt Aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
