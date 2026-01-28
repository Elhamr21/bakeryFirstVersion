import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import { locations } from "@/lib/data"

export const metadata = {
  title: "Standorte | Balkan Bäckerei",
  description: "Besuchen Sie unsere drei Bäckereien in Offenbach, Dreieich und Hanau. Frisches Brot und traditionelle Backwaren täglich.",
}

export default function StandortePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 animate-fade-in">
              Unsere Filialen
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in-up">
              Standorte
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards', opacity: 0 }}>
              Besuchen Sie uns an einem unserer drei bequem gelegenen Standorte im Frankfurt-Rhein-Main-Gebiet. Frische Backwaren und herzliche Gastfreundschaft erwarten Sie.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-card">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {locations.map((location, index) => (
              <Card key={location.id} className="bg-muted border-none shadow-lg card-glow hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-0">
                  {/* Logo Section */}
                  <div className="relative h-48 sm:h-56 lg:h-64 bg-card flex items-center justify-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                    <Image
                      src={location.logo || "/placeholder.svg"}
                      alt={`${location.name} Logo`}
                      width={250}
                      height={150}
                      className="max-h-36 sm:max-h-44 lg:max-h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 sm:p-6 lg:p-8">
                    <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {location.city}
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base mb-6 line-clamp-3">
                      {location.shortDescription}
                    </p>
                    
                    {/* Info Items */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{location.phone}</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{location.hours}</span>
                      </div>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 btn-shine shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <Link href={`/standorte/${location.id}`}>
                          Details Ansehen
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                        <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                          <MapPin className="w-4 h-4 mr-2" />
                          Route Planen
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-muted relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto relative">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4">
              Frankfurt-Rhein-Main
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Immer in Ihrer Nähe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Unsere drei Standorte sind strategisch im Rhein-Main-Gebiet platziert, damit Sie nie weit von frischen Balkan-Backwaren entfernt sind.
            </p>
          </div>
          
          {/* Location Quick Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {locations.map((location) => (
              <Link 
                key={location.id} 
                href={`/standorte/${location.id}`}
                className="bg-card rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground">{location.city}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{location.address.split(',')[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
            Haben Sie Fragen?
          </h2>
          <p className="text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Kontaktieren Sie uns gerne - wir freuen uns auf Ihre Nachricht!
          </p>
          <Button asChild size="lg" variant="secondary" className="text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Link href="/kontakt">Jetzt Kontaktieren</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
