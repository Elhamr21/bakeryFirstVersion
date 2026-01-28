import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import { locations, getLocationById } from "@/lib/data"

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = getLocationById(slug)
  
  if (!location) {
    return {
      title: "Standort nicht gefunden | Balkan Bäckerei",
    }
  }
  
  return {
    title: `${location.name} | Balkan Bäckerei`,
    description: location.shortDescription,
  }
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = getLocationById(slug)
  
  if (!location) {
    notFound()
  }

  const categories = [...new Set(location.products.map(p => p.category))]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
          <Link 
            href="/standorte" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Zurück zu allen Standorten</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl scale-110 pointer-events-none" />
                <Image
                  src={location.logo || "/placeholder.svg"}
                  alt={`${location.name} Logo`}
                  width={400}
                  height={250}
                  className="relative max-h-48 sm:max-h-56 lg:max-h-64 w-auto object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Info */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4">
                {location.city}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                {location.name}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl">
                {location.fullDescription}
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{location.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{location.hours.split(',')[0]}</span>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-shine shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-5 h-5 mr-2" />
                    Route Planen
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Link href="/kontakt">Kontakt Aufnehmen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-card border-y border-border">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Adresse</p>
                <p className="font-medium text-foreground">{location.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Öffnungszeiten</p>
                <p className="font-medium text-foreground">{location.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-muted relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto relative">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4">
              Unsere Spezialitäten
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Produkte in {location.city}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Entdecken Sie unsere Auswahl an traditionellen Backwaren, täglich frisch zubereitet.
            </p>
          </div>
          
          {categories.map((category) => (
            <div key={category} className="mb-10 sm:mb-12 lg:mb-16 last:mb-0">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full" />
                {category === 'Bread' ? 'Brot' : category === 'Pastry' ? 'Gebäck' : 'Süßspeisen'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {location.products
                  .filter(p => p.category === category)
                  .map((product) => (
                    <Card key={product.id} className="bg-card border-none shadow-md card-glow hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-4 sm:p-5">
                        <h4 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2">{product.name}</h4>
                        <p className="text-muted-foreground text-sm">{product.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-card">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Weitere Standorte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Besuchen Sie auch unsere anderen Filialen in der Region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {locations
              .filter(l => l.id !== location.id)
              .map((otherLocation) => (
                <Link 
                  key={otherLocation.id}
                  href={`/standorte/${otherLocation.id}`}
                  className="bg-muted rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 relative shrink-0">
                      <Image
                        src={otherLocation.logo || "/placeholder.svg"}
                        alt={otherLocation.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{otherLocation.city}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{otherLocation.address.split(',')[0]}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
